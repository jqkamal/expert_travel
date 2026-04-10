import { motion } from "framer-motion";
import { PhoneCall, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0077C8] via-[#005fa3] to-[#0a1628]" />

      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]" />
      <motion.div
        className="absolute right-0 top-0 opacity-20"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <Plane className="w-64 h-64 text-white -rotate-45" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Plan Your Dream Trip?
          </motion.h2>

          <motion.p
            className="text-xl text-[#b3ddf5] mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Speak with our travel experts today. We'll handle the logistics so
            you can enjoy the journey.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto text-lg h-14 px-8 rounded-full bg-white text-primary hover:bg-gray-100 shadow-xl"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get a Free Quote
            </Button>
            <Button
              size="lg"
              className="w-full sm:w-auto text-lg h-14 px-8 rounded-full bg-[#25D366] hover:bg-[#1DA851] text-white shadow-xl relative overflow-hidden group"
              onClick={() =>
                window.open("https://wa.me/919384747667", "_blank")
              }
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 group-hover:scale-x-100 scale-x-0 origin-left transition-transform duration-300 ease-out" />
              <PhoneCall className="mr-2 h-5 w-5 relative z-10" />
              <span className="relative z-10">WhatsApp Us</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
