import { motion } from "framer-motion";
import { Headphones, CreditCard, FileCheck, CalendarCheck } from "lucide-react";

export default function FeaturesBar() {
  const features = [
    { icon: Headphones, text: "Personalized Travel Solutions" },
    { icon: CreditCard, text: "Best Travel Deals with Expert Guidance" },
    { icon: FileCheck, text: "End-to-End Travel Support" },
    { icon: CalendarCheck, text: "Fast & Reliable Service" },
  ];

  return (
    <section className="bg-white py-6 mb-4 border-t border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="
            grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
            gap-6
            place-items-center text-center
          "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center gap-2 cursor-pointer group px-3"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.08 }}
              >
                {/* Icon */}
                <Icon className="text-primary w-7 h-7 transition-transform duration-300 group-hover:scale-110" />

                {/* Text */}
                <p className="text-xs sm:text-sm font-medium text-gray-700 leading-tight whitespace-pre-line">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
