import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const features = [
    "Flight Bookings & Best Fares",
    "Hotel & Cruise Reservations",
    "Visa Assistance & Documentation",
    "Holiday & Tour Packages",
    "Travel Insurance Coverage",
    "Airport Transfers & Attestation",
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            className="w-full lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block bg-[#0077C8]/10 text-[#0077C8] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-2">
              About Expert Travel
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Professional Travel Solutions You Can Trust
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Expert Travel is a professional travel agency based in Panaikulam,
              Ramanathapuram District, offering a comprehensive range of travel
              services. Led by a seasoned professional with over 20 years of
              experience in the UAE travel industry, we combine deep industry
              knowledge with a customer-first approach, Ensuring a smooth and
              hassle-free experience from start to finish.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button
                size="lg"
                className="rounded-full px-8 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Learn More About Us
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <img
                src="/images/beach-resort.png"
                alt="Luxury Travel Destination"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Floating Experience Card */}
            <motion.div
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[200px]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-primary font-bold text-4xl mb-1">20+</div>
              <div className="text-gray-800 font-semibold leading-tight">
                Years of UAE Experience
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
