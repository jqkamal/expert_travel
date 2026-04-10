import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Founder() {
  return (
    <section className="py-20  bg-[#237FC2] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content — Left */}
          <motion.div
            className="w-full lg:w-1/2 space-y-5 text-amber-950"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase text-white">
              Meet The Founder
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Abdul Hameed
            </h2>
            <div className="text-xl font-semibold opacity-90 border-b border-amber-800/20 pb-5 text-white">
              Founder & CEO, Expert Travel
            </div>

            <div className="inline-flex items-center gap-2 bg-white/40 rounded-full px-4 py-2 font-bold text-sm shadow text-white">
              20+ Years UAE Travel Industry Experience
            </div>

            <p className="text-base leading-relaxed opacity-95 text-white">
              Not just a travel agency, Your personal travel expert. With over
              20 years of experience in the UAE travel industry, including
              experience at a leading international airline, you benefit from
              deep expertise in global travel, fare structures, and customer
              service.
            </p>
            <p className="text-sm leading-relaxed opacity-85 text-white">
              Having travelled to multiple international destinations, including
              Schengen countries, I understand travel from both a professional
              and personal perspective. At Expert Travel, my focus is simple: to
              make your journey smooth, reliable, and stress-free, From your
              first enquiry to final boarding.
            </p>
            <p className="text-sm leading-relaxed opacity-85 text-white">
              At Expert Travel, my focus is simple: To make your journey smooth,
              reliable, and stress-free.
            </p>
            <p className="text-sm leading-relaxed opacity-85 text-white">
              From your first enquiry to final boarding, you receive complete
              support at every step. Whether it’s a family vacation, business
              trip, or a special getaway, your journey is handled with care and
              precision.
            </p>
            <p className="text-sm leading-relaxed opacity-85 text-white">
              Let’s plan your next journey. Get in touch today.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                className="bg-[#23gap-2 bg-white/40 text-white hover:bg-[#1b6aa5] rounded-full px-6"
                onClick={() => (window.location.href = "tel:+919384747667")}
              >
                <Phone className="mr-2 h-4 w-4" />
                Get in Touch
              </Button>
              <a
                href="https://www.facebook.com/share/18RKo57JNE/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/experttravel_beyondbooking"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="mailto:experttravelbookings@gmail.com"
                className="w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center transition-colors"
              >
                <Mail className="h-5 w-5 text-white" />
              </a>
            </div>
          </motion.div>

          {/* Photo — Right */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Photo frame */}
              <div className="relative w-[300px] h-[400px] md:w-[380px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl z-10 border-4 border-white">
                <img
                  src="/images/founder.png"
                  alt="Abdul Hameed, Founder & CEO of Expert Travel"
                  className="w-full h-full object-cover object-top"
                  data-testid="img-founder"
                />
              </div>

              {/* Decorative offset frame */}
              <div className="absolute top-6 -right-6 w-full h-full rounded-2xl border-4 border-white/20 z-0" />

              {/* Badge */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-3 border border-amber-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="bg-[#0077C8]/10 text-[#0077C8] p-3 rounded-lg font-bold text-2xl text-primary">
                  20+
                </div>
                <div className="text-sm font-bold text-gray-900 leading-tight">
                  Years UAE
                  <br />
                  Experience
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
