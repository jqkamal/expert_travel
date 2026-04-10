import { motion } from "framer-motion";
import { CheckCircle2, Shield, HeartHandshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function CoreValues() {
  const values = [
    {
      title: "Transparency",
      description: "No hidden fees or surprise charges. We believe in clear, honest communication throughout your booking process.",
      icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
    },
    {
      title: "Reliability",
      description: "Count on us to deliver exactly what we promise. Your peace of mind is our highest priority when you travel.",
      icon: <Shield className="h-8 w-8 text-primary" />,
    },
    {
      title: "Service Excellence",
      description: "Personalized attention to every detail of your journey, ensuring a seamless and memorable travel experience.",
      icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide us in delivering exceptional travel experiences.</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {values.map((value, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow bg-white text-center pt-8">
                <CardContent className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#0077C8]/10 flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
