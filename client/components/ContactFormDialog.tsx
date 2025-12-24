import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface ContactFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactFormDialog({ open, onOpenChange }: ContactFormDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!", {
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
        onOpenChange(false);
      } else {
        toast.error("Failed to send message", {
          description: data.error || "Please try again later.",
        });
      }
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-[#FEFEFE]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black text-[#0F0F0F]">
            Get Assignment Help from Bthreeesolutions
          </DialogTitle>
          <DialogDescription className="text-[#828282]">
            Fill out the form below and we'll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-[#0F0F0F] font-semibold">
              Name *
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="border-[#E0E0E0] focus:border-[#0F0F0F]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#0F0F0F] font-semibold">
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
              className="border-[#E0E0E0] focus:border-[#0F0F0F]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-[#0F0F0F] font-semibold">
              Phone
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 9876543210"
              className="border-[#E0E0E0] focus:border-[#0F0F0F]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company" className="text-[#0F0F0F] font-semibold">
              Company
            </Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company name"
              className="border-[#E0E0E0] focus:border-[#0F0F0F]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-[#0F0F0F] font-semibold">
              Message *
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your assignment needs..."
              rows={4}
              className="border-[#E0E0E0] focus:border-[#0F0F0F]"
            />
          </div>
          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-[#0F0F0F] hover:bg-[#828282] text-[#FEFEFE] font-bold"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
            <Button
              type="button"
              onClick={() => onOpenChange(false)}
              className="border-2 border-[#0F0F0F] text-[#0F0F0F] hover:bg-[#F5F5F5] bg-transparent"
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
