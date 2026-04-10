import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Travel Enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`,
    );
    window.location.href = `mailto:experttravelbookings@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contacts = [
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone / WhatsApp",
      value: "+91 93847 47667",
      action: () => window.open("https://wa.me/919384747667", "_blank"),
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "experttravelbookings@gmail.com",
      action: () =>
        (window.location.href = "mailto:experttravelbookings@gmail.com"),
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Address",
      value:
        "8/1277-6, West Street, Opp Kaiyoom Electricals, Panaikulam, Ramanathapuram District,  Tamil Nadu-623522",
      action: undefined,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-[#0077C8]/10 text-[#0077C8] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
              Get In Touch
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Have a question or ready to plan your trip? Send us a message and
              we'll get back to you promptly.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {contacts.map((c, i) => (
              <div
                key={i}
                onClick={c.action}
                className={`flex items-start gap-5 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 ${c.action ? "cursor-pointer hover:shadow-md hover:border-primary/20 transition-all" : ""}`}
              >
                <div className="bg-primary/10 text-primary p-3 rounded-xl shrink-0">
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    {c.label}
                  </p>
                  <p
                    className={`text-gray-800 font-medium text-sm leading-relaxed ${c.action ? "text-primary" : ""}`}
                  >
                    {c.value}
                  </p>
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <Button
              size="lg"
              className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white rounded-2xl h-14 text-base font-semibold shadow-lg"
              onClick={() =>
                window.open("https://wa.me/919384747667", "_blank")
              }
              data-testid="button-whatsapp-contact"
            >
              <Phone className="mr-3 h-5 w-5" />
              Chat With Us on WhatsApp
            </Button>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="name"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Abdul Hameed"
                    required
                    className="rounded-xl border-gray-200"
                    data-testid="input-name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="rounded-xl border-gray-200"
                    data-testid="input-phone"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="rounded-xl border-gray-200"
                  data-testid="input-email"
                />
              </div>

              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-gray-700"
                  htmlFor="message"
                >
                  Message / Travel Requirements
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your travel plans — destination, dates, number of travelers..."
                  required
                  rows={5}
                  className="rounded-xl border-gray-200 resize-none"
                  data-testid="input-message"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-xl h-12 text-base font-semibold"
                disabled={submitted}
                data-testid="button-submit-contact"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>

              <p className="text-xs text-gray-400 text-center">
                Clicking "Send Message" will open your email app with a
                pre-filled message.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
