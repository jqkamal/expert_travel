import { motion } from "framer-motion";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src="/images/hero.png"
          alt="Travel Destination"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#003d6b]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent opacity-80" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <div className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
            <ShieldCheck className="h-4 w-4 text-emerald-400 group-hover:text-white transition-colors primery-300" />
            <span className="text-white text-sm font-medium tracking-wide uppercase">
              Professional & Trusted
            </span>
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Your Personal <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7ecef4] to-white">
            Travel Expert
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          20+ years of experience in global travel, Delivering seamless
          journeys, best fares, and personalized service you can trust. From
          flights to cruises, we handle complete travel planning tailored to
          your needs.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            size="lg"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="w-full sm:w-auto text-lg h-14 px-8 rounded-full shadow-lg shadow-primary/30 group"
          >
            Start Your Trip
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            className="w-full sm:w-auto text-lg h-14 px-8 rounded-full bg-[#25D366] hover:bg-[#1DA851] text-white shadow-lg shadow-[#25D366]/30 group"
            onClick={() => window.open("https://wa.me/919384747667", "_blank")}
          >
            <Phone className="mr-2 h-5 w-5 group-hover:-rotate-12 transition-transform" />
            WhatsApp Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
