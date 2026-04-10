import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Flight Bookings", href: "#services" },
    { label: "Holiday Packages", href: "#packages" },
    { label: "Visa Assistance", href: "#services" },
    { label: "Contact Us", href: "#contact" },
    { label: "FAQs", href: "#" },
  ];

  const serviceLinks = [
    "Flight Bookings",
    "Hotel Bookings",
    "Cruise Bookings",
    "Visa Assistance",
    "Holiday Packages",
    "Travel Insurance",
    "Airport Transfers",
    "Certificate Attestation",
  ];

  const socials = [
    {
      icon: <Facebook className="h-4 w-4" />,
      label: "Facebook",
      href: "https://www.facebook.com/share/18RKo57JNE/?mibextid=wwXIfr",
    },
    {
      icon: <Instagram className="h-4 w-4" />,
      label: "Instagram",
      href: "https://www.instagram.com/experttravel_beyondbooking?igsh=MTl2em9kZXFlZWVycQ%3D%3D&utm_source=qr",
    },
    {
      icon: <Youtube className="h-4 w-4" />,
      label: "YouTube",
      href: "#",
    },
    {
      icon: <Linkedin className="h-4 w-4" />,
      label: "LinkedIn",
      href: "#",
    },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a1628] text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center">
              <img
                src="/images/Logos.png"
                alt="Expert Travel Logo"
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional travel agency based in Panaikulam, Ramanathapuram
              District. 20+ years of UAE travel industry experience,
              Personalized solutions for leisure and business travelers.
            </p>
            <div>
              <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider font-semibold">
                Follow us for travel tips, deals & updates
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center before:content-['›'] before:mr-2 before:text-primary text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center before:content-['›'] before:mr-2 before:text-primary text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  8/1277-6, West Street,
                  <br />
                  Opp. Kaiyoom Electricals,
                  <br />
                  Panaikulam,
                  <br />
                  Ramanathapuram District,
                  <br />
                  Tamil Nadu– 623522.
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="tel:+919384747667"
                  className="hover:text-white transition-colors"
                  data-testid="link-phone"
                >
                  +91 93847 47667
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:experttravelbookings@gmail.com"
                  className="hover:text-white transition-colors break-all"
                  data-testid="link-email"
                >
                  experttravelbookings@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-6 space-y-3">
              <Button
                className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white"
                onClick={() =>
                  window.open("https://wa.me/919384747667", "_blank")
                }
                data-testid="button-whatsapp-footer"
              >
                <Phone className="mr-2 h-4 w-4" />
                WhatsApp Us
              </Button>
              <Button
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent"
                onClick={() =>
                  (window.location.href =
                    "mailto:experttravelbookings@gmail.com")
                }
                data-testid="button-email-footer"
              >
                <Mail className="mr-2 h-4 w-4" />
                Email Us
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Expert Travel. All rights
            reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
