import { motion } from "framer-motion";
import {
  Plane,
  Hotel,
  Anchor,
  FileText,
  Heart,
  Compass,
  ShieldPlus,
  Car,
  Coins,
  MessageSquare,
  Award,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Flight Bookings",
    icon: <Plane className="h-5 w-5" />,
    image: "/images/flight.png",
    highlights: [
      "Best Fare Options",
      "Group & Special Pricing",
      "Last-Minute Bookings",
    ],
    desc: "Seamless domestic and international flight booking with competitive fares — economy to first class.",
  },
  {
    title: "Travel Consultation",
    icon: <MessageSquare className="h-5 w-5" />,
    image: "/images/travel.png",
    highlights: [
      "Personalized Travel Planning",
      "Route & Itinerary Guidance",
      "Budget Optimization",
    ],
    desc: "Get personalized travel consultation and complete trip planning tailored to your needs and budget.",
  },
  {
    title: "Cruise Bookings",
    icon: <Anchor className="h-5 w-5" />,
    image: "/images/cruise.png",
    highlights: [
      "International Cruise Options",
      "Cabin Selection Guidance",
      "Family & Luxury Cruises",
    ],
    desc: "Experience a unique way of travelling with cruise holidays — end-to-end assistance for every cruise.",
  },
  {
    title: "Hotel Bookings",
    icon: <Hotel className="h-5 w-5" />,
    image: "/images/hotel.png",
    highlights: [
      "Budget to Luxury Options",
      "Verified Stays",
      "Best Pricing & Exclusive Deals",
    ],
    desc: "Wide range of hotel options from budget-friendly stays to luxury accommodations worldwide.",
  },
  {
    title: "Visa Assistance",
    icon: <FileText className="h-5 w-5" />,
    image: "/images/visa.png",
    highlights: [
      "Tourist Visa Support",
      "Documentation Guidance",
      "Step-by-Step Assistance",
    ],
    desc: "Reliable support for tourist visa applications with proper documentation and step-by-step guidance.",
  },
  {
    title: "Sightseeing & Tours",
    icon: <Compass className="h-5 w-5" />,
    image: "/images/Sightseeing.jpeg",
    highlights: ["City Tours", "Custom Experiences", "Private & Group Options"],
    desc: "Curated sightseeing tours and local activities to help you explore destinations the right way.",
  },
  {
    title: "Travel Insurance",
    icon: <ShieldPlus className="h-5 w-5" />,
    image: "/images/insurance.png",
    highlights: ["Medical Coverage", "Trip Protection", "Affordable Plans"],
    desc: "Stay protected during your journey with reliable travel insurance covering medical emergencies and delays.",
  },
  {
    title: "Airport Transfers",
    icon: <Car className="h-5 w-5" />,
    image: "/images/transfers.jpg",
    highlights: [
      "Airport Pick-up & Drop",
      "Private Vehicle Options",
      "Reliable Service",
    ],
    desc: "Safe and reliable airport transfers for a smooth start and end to every journey.",
  },
  {
    title: "Holiday Packages",
    icon: <Heart className="h-5 w-5" />,
    image: "/images/mountain.png",
    highlights: [
      "Honeymoon Packages",
      "Family Vacations",
      "Group & International Tours",
    ],
    desc: "Tailored holiday packages designed to match your travel style — from romantic getaways to family adventures.",
  },
  {
    title: "Certificate Attestation",
    icon: <Award className="h-5 w-5" />,
    image: "/images/visa.jpeg",
    highlights: [
      "Document Guidance",
      "Attestation Support",
      "Reliable Processing",
    ],
    desc: "Assistance for certificate attestation services with proper guidance and reliable end-to-end processing.",
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block bg-[#0077C8]/10 text-[#0077C8] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
              Our Services
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Travel Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From flights and visas to packages and attestation — we handle
              everything so you can focus on the journey.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Card className="h-full overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="relative h-44 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        `https://placehold.co/600x400/dbeafe/1e40af?text=${encodeURIComponent(service.title)}`;
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full text-primary z-20 shadow-lg">
                    {service.icon}
                  </div>
                </div>
                <CardContent className="p-4 bg-white">
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                    {service.desc}
                  </p>
                  <ul className="mt-3 space-y-1">
                    {service.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-xs text-gray-600 flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
