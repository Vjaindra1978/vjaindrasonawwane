import { useState, useEffect } from "react";
import { format, addDays, isSameDay, isWeekend } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, Mail, MessageSquare, CheckCircle, ChevronLeft, ChevronRight, Loader2, Sparkles, Trash2, CalendarX, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const EMAILJS_SERVICE_ID = "service_n1s3igu";
const EMAILJS_TEMPLATE_ID = "template_alsnpb5";
const EMAILJS_PUBLIC_KEY = "OLEkUD0cAHdwJIaGr";

// Confirmation email template ID - you may need to create this in EmailJS
const EMAILJS_CONFIRMATION_TEMPLATE_ID = "template_confirmation";

const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
];

interface Booking {
  date: string;
  time: string;
  name: string;
  email: string;
}

const BOOKINGS_STORAGE_KEY = "consultation_bookings";

const getBookings = (): Booking[] => {
  try {
    const stored = localStorage.getItem(BOOKINGS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const saveBooking = (booking: Booking) => {
  const bookings = getBookings();
  bookings.push(booking);
  localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(bookings));
};

const deleteBooking = (date: string, time: string): void => {
  const bookings = getBookings();
  const filtered = bookings.filter((b) => !(b.date === date && b.time === time));
  localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(filtered));
};

const isSlotBooked = (date: Date, time: string): boolean => {
  const bookings = getBookings();
  const dateStr = format(date, "yyyy-MM-dd");
  return bookings.some((b) => b.date === dateStr && b.time === time);
};

const getAvailableSlotsForDate = (date: Date): string[] => {
  return timeSlots.filter((time) => !isSlotBooked(date, time));
};

const getAvailabilityStatus = (date: Date): { available: number; status: 'full' | 'limited' | 'available' } => {
  const available = getAvailableSlotsForDate(date).length;
  if (available === 0) return { available, status: 'full' };
  if (available <= 2) return { available, status: 'limited' };
  return { available, status: 'available' };
};

interface ConsultationSchedulerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationScheduler({ isOpen, onClose }: ConsultationSchedulerProps) {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [weekOffset, setWeekOffset] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [availableSlots, setAvailableSlots] = useState<string[]>(timeSlots);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [showMyBookings, setShowMyBookings] = useState(false);
  const [myBookings, setMyBookings] = useState<Booking[]>([]);
  const [bookingToCancel, setBookingToCancel] = useState<Booking | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  // Update available slots when date changes
  useEffect(() => {
    if (selectedDate) {
      const slots = getAvailableSlotsForDate(selectedDate);
      setAvailableSlots(slots);
      // Reset selected time if it's no longer available
      if (selectedTime && !slots.includes(selectedTime)) {
        setSelectedTime("");
      }
    }
  }, [selectedDate, selectedTime, refreshKey]);

  // Load user's bookings
  useEffect(() => {
    setMyBookings(getBookings());
  }, [refreshKey]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateField = (field: string, value: string) => {
    const fieldLabels: Record<string, string> = {
      name: "Name",
      email: "Email",
      topic: "Topic",
    };
    if (!value.trim()) {
      return `${fieldLabels[field]} is required`;
    }
    if (field === "email" && !validateEmail(value)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true });
    const error = validateField(field, formData[field as keyof typeof formData]);
    setErrors({ ...errors, [field]: error });
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors({ ...errors, [field]: error });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field as keyof typeof formData]);
      if (error) newErrors[field] = error;
    });
    setErrors(newErrors);
    setTouched({ name: true, email: true, topic: true });
    return Object.keys(newErrors).length === 0;
  };

  const getWeekDays = () => {
    const today = new Date();
    const startOfWeek = addDays(today, weekOffset * 7);
    const days = [];
    
    for (let i = 0; i < 7; i++) {
      const date = addDays(startOfWeek, i);
      if (!isWeekend(date) && date >= today) {
        days.push(date);
      }
    }
    
    return days.slice(0, 5);
  };

  const sendConfirmationEmail = async (formattedDateTime: string) => {
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONFIRMATION_TEMPLATE_ID,
        {
          to_email: formData.email,
          to_name: formData.name,
          scheduled_time: formattedDateTime,
          topic: formData.topic,
        },
        EMAILJS_PUBLIC_KEY
      );
    } catch (error) {
      console.log("Confirmation email not sent (template may not exist):", error);
      // Don't throw - this is optional functionality
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    const formattedDateTime = `${format(selectedDate, "EEEE, MMMM d, yyyy")} at ${selectedTime} (NZST)`;

    try {
      // Send notification to admin
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          from_email: formData.email,
          subject: "Consultation Request",
          time: formattedDateTime,
          message: `Topic: ${formData.topic}\n\nScheduled Time: ${formattedDateTime}`,
          to_name: "Vjaindra Sonawwane",
        },
        EMAILJS_PUBLIC_KEY
      );

      // Save booking to localStorage
      saveBooking({
        date: format(selectedDate, "yyyy-MM-dd"),
        time: selectedTime,
        name: formData.name,
        email: formData.email,
      });

      // Send confirmation email to user (optional - won't fail if template doesn't exist)
      await sendConfirmationEmail(formattedDateTime);

      setStep(3);
      toast({
        title: "Consultation Scheduled!",
        description: "You'll receive a confirmation email shortly.",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to Schedule",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setStep(1);
    setSelectedDate(null);
    setSelectedTime("");
    setFormData({ name: "", email: "", topic: "" });
    setErrors({});
    setTouched({});
    setWeekOffset(0);
    setAvailableSlots(timeSlots);
    setShowMyBookings(false);
    onClose();
  };

  const handleCancelBooking = (booking: Booking) => {
    deleteBooking(booking.date, booking.time);
    setBookingToCancel(null);
    setRefreshKey((k) => k + 1);
    toast({
      title: "Booking Cancelled",
      description: `Your consultation on ${format(new Date(booking.date), "MMMM d")} at ${booking.time} has been cancelled.`,
    });
  };

  const getFutureBookings = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return myBookings.filter((b) => new Date(b.date) >= today).sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  };

  if (!isOpen) return null;

  const weekDays = getWeekDays();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={handleClose} />
      
      <div className="relative bg-card border border-border rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Schedule Consultation
                </h3>
                <p className="text-sm text-muted-foreground">30-minute discovery call</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="w-8 h-8 rounded-lg hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              ✕
            </button>
          </div>
          
          {/* Progress Steps */}
          <div className="flex items-center gap-2 mt-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2 flex-1">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                  step >= s 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted text-muted-foreground"
                )}>
                  {step > s ? <CheckCircle className="w-4 h-4" /> : s}
                </div>
                {s < 3 && (
                  <div className={cn(
                    "flex-1 h-1 rounded-full transition-colors",
                    step > s ? "bg-primary" : "bg-muted"
                  )} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  Select a Date
                </h4>
                
                <div className="flex items-center justify-between mb-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setWeekOffset(Math.max(0, weekOffset - 1))}
                    disabled={weekOffset === 0}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    {weekDays.length > 0 && (
                      <>
                        {format(weekDays[0], "MMM d")} - {format(weekDays[weekDays.length - 1], "MMM d, yyyy")}
                      </>
                    )}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setWeekOffset(weekOffset + 1)}
                    disabled={weekOffset >= 4}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-5 gap-2">
                  {weekDays.map((date) => {
                    const { available, status } = getAvailabilityStatus(date);
                    return (
                      <button
                        key={date.toISOString()}
                        onClick={() => status !== 'full' && setSelectedDate(date)}
                        disabled={status === 'full'}
                        className={cn(
                          "p-3 rounded-xl border text-center transition-all relative",
                          status === 'full'
                            ? "border-border bg-muted/30 cursor-not-allowed opacity-60"
                            : selectedDate && isSameDay(date, selectedDate)
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border hover:border-primary/50 hover:bg-muted"
                        )}
                      >
                        <div className="text-xs text-muted-foreground">
                          {format(date, "EEE")}
                        </div>
                        <div className="text-lg font-semibold text-foreground">
                          {format(date, "d")}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {format(date, "MMM")}
                        </div>
                        {/* Availability Indicator */}
                        <div className="mt-1 flex justify-center">
                          {status === 'full' ? (
                            <span className="text-[10px] text-destructive font-medium">Full</span>
                          ) : status === 'limited' ? (
                            <span className="flex items-center gap-0.5 text-[10px] text-amber-500 font-medium">
                              <AlertCircle className="w-3 h-3" />
                              {available} left
                            </span>
                          ) : (
                            <span className="w-2 h-2 rounded-full bg-green-500" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {selectedDate && (
                <div className="animate-fade-in">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    Select a Time (NZST)
                  </h4>
                  {availableSlots.length === 0 ? (
                    <p className="text-muted-foreground text-sm py-4 text-center">
                      No available slots for this date. Please select another day.
                    </p>
                  ) : (
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {timeSlots.map((time) => {
                        const isBooked = !availableSlots.includes(time);
                        return (
                          <button
                            key={time}
                            onClick={() => !isBooked && setSelectedTime(time)}
                            disabled={isBooked}
                            className={cn(
                              "py-2 px-3 rounded-lg border text-sm font-medium transition-all",
                              isBooked
                                ? "border-border bg-muted/50 text-muted-foreground cursor-not-allowed line-through opacity-50"
                                : selectedTime === time
                                  ? "border-primary bg-primary/10 text-primary"
                                  : "border-border hover:border-primary/50 hover:bg-muted text-foreground"
                            )}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              <div className="flex gap-3">
                <Button
                  variant="hero"
                  className="flex-1"
                  disabled={!selectedDate || !selectedTime}
                  onClick={() => setStep(2)}
                >
                  Continue
                </Button>
              </div>

              {/* My Bookings Toggle */}
              {getFutureBookings().length > 0 && (
                <div className="border-t border-border pt-4 mt-4">
                  <button
                    onClick={() => setShowMyBookings(!showMyBookings)}
                    className="w-full flex items-center justify-between text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <CalendarX className="w-4 h-4" />
                      My Bookings ({getFutureBookings().length})
                    </span>
                    <ChevronRight className={cn("w-4 h-4 transition-transform", showMyBookings && "rotate-90")} />
                  </button>

                  <AnimatePresence>
                    {showMyBookings && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-2 mt-3">
                          {getFutureBookings().map((booking) => (
                            <div
                              key={`${booking.date}-${booking.time}`}
                              className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border"
                            >
                              <div>
                                <p className="text-sm font-medium text-foreground">
                                  {format(new Date(booking.date), "EEE, MMM d")} at {booking.time}
                                </p>
                                <p className="text-xs text-muted-foreground">{booking.name}</p>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-destructive hover:text-destructive hover:bg-destructive/10"
                                onClick={() => setBookingToCancel(booking)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="bg-muted/50 rounded-xl p-4 mb-6">
                <p className="text-sm text-muted-foreground">Selected Time:</p>
                <p className="font-semibold text-foreground">
                  {selectedDate && format(selectedDate, "EEEE, MMMM d, yyyy")} at {selectedTime} (NZST)
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Your Name
                </label>
                <Input
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  className={errors.name && touched.name ? "border-destructive focus-visible:ring-destructive" : ""}
                />
                {errors.name && touched.name && (
                  <p className="text-destructive text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  className={errors.email && touched.email ? "border-destructive focus-visible:ring-destructive" : ""}
                />
                {errors.email && touched.email && (
                  <p className="text-destructive text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  What would you like to discuss?
                </label>
                <Textarea
                  placeholder="Briefly describe your transformation challenge or topic..."
                  className={`min-h-[100px] ${errors.topic && touched.topic ? "border-destructive focus-visible:ring-destructive" : ""}`}
                  value={formData.topic}
                  onChange={(e) => handleChange("topic", e.target.value)}
                  onBlur={() => handleBlur("topic")}
                />
                {errors.topic && touched.topic && (
                  <p className="text-destructive text-xs mt-1">{errors.topic}</p>
                )}
              </div>

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => setStep(1)}
                >
                  Back
                </Button>
                <Button 
                  type="submit" 
                  variant="hero" 
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Scheduling...
                    </>
                  ) : (
                    "Confirm Booking"
                  )}
                </Button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6 relative"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </motion.div>
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                    animate={{ 
                      opacity: [0, 1, 0], 
                      scale: [0, 1, 0.5],
                      x: Math.cos(i * 60 * Math.PI / 180) * 60,
                      y: Math.sin(i * 60 * Math.PI / 180) * 60
                    }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                    className="absolute"
                  >
                    <Sparkles className="w-4 h-4 text-primary" />
                  </motion.div>
                ))}
              </motion.div>
              <motion.h4
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-display text-2xl font-bold text-foreground mb-2"
              >
                Consultation Scheduled!
              </motion.h4>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground mb-4"
              >
                Your 30-minute discovery call has been booked for:
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-muted/50 rounded-xl p-4 mb-6 inline-block"
              >
                <p className="font-semibold text-foreground">
                  {selectedDate && format(selectedDate, "EEEE, MMMM d, yyyy")}
                </p>
                <p className="text-primary font-medium">{selectedTime} (NZST)</p>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-sm text-muted-foreground mb-6"
              >
                You'll receive a confirmation email with meeting details shortly.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Button variant="hero" onClick={handleClose}>
                  Done
                </Button>
              </motion.div>
            </div>
          )}
        </div>
      </div>

      {/* Cancel Booking Confirmation Dialog */}
      <AlertDialog open={!!bookingToCancel} onOpenChange={() => setBookingToCancel(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Cancel Booking?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to cancel your consultation on{" "}
              <strong>
                {bookingToCancel && format(new Date(bookingToCancel.date), "EEEE, MMMM d")} at {bookingToCancel?.time}
              </strong>
              ? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Keep Booking</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={() => bookingToCancel && handleCancelBooking(bookingToCancel)}
            >
              Cancel Booking
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
