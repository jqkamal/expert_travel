import { useState } from "react";
import { Link } from "wouter";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [, navigate] = useLocation();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Packages", href: "#packages" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center z-50">
          <img
            src="/images/Logos.png"
            alt="Expert Travel Logo"
            className={`h-8 md:h-10 w-auto transition-all duration-200 ${
              isScrolled ? "brightness-100" : "brightness-0 invert"
            }`}
            data-testid="img-logo"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className={`text-sm font-medium hover:text-primary transition-colors ${
                isScrolled ? "text-gray-700" : "text-white/90"
              }`}
              data-testid={`link-nav-${link.name.toLowerCase().replace(" ", "-")}`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            className="bg-[#25D366] hover:bg-[#1DA851] text-white rounded-full"
            onClick={() => window.open("https://wa.me/919384747667", "_blank")}
            data-testid="button-whatsapp-nav"
          >
            <Phone className="mr-2 h-4 w-4" />
            WhatsApp
          </Button>
          <Button
            className="rounded-full shadow-lg hover:shadow-xl transition-all"
            onClick={() => scrollTo("#contact")}
            data-testid="button-plan-trip"
          >
            Plan My Trip
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden z-50 ${isScrolled ? "text-gray-900" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-4 flex flex-col gap-4 lg:hidden border-t border-gray-100"
          >
            {/* Mobile Logo */}
            {/* <div className="flex justify-center pb-2 border-b border-gray-100">
              <img
                src="/images/logo.png"
                alt="Expert Travel"
                className="h-10 w-auto"
              />
            </div> */}
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-left px-4 py-3 text-gray-800 font-medium hover:bg-gray-50 rounded-lg"
              >
                {link.name}
              </button>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
              <Button
                className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white"
                onClick={() =>
                  window.open("https://wa.me/919384747667", "_blank")
                }
              >
                <Phone className="mr-2 h-4 w-4" />
                WhatsApp Now
              </Button>
              <Button className="w-full" onClick={() => scrollTo("#contact")}>
                Start My Trip
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
