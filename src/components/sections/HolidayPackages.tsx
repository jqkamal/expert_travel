import { motion } from "framer-motion";
import { Heart, Users, Globe, MapPin, Plane } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const packages = [
  {
    title: "Honeymoon Packages",
    icon: <Heart className="h-6 w-6" />,
    image: "/images/honeymoon.png",
    desc: "Romantic getaways designed for unforgettable moments. Handpicked destinations with complete planning.",
    color: "from-black/30 to-rose-600/20",
    badge: "bg-pink-100 text-pink-700",
    type: "Couple",
  },
  {
    title: "Family Vacations",
    icon: <Users className="h-6 w-6" />,
    image: "/images/happy family.jpeg",
    desc: "Comfortable and well-planned trips for all age groups. Fun-filled itineraries the whole family will love.",
    color: "from-black/30 to-[#005a9e]/200",
    badge: "bg-[#0077C8]/10 text-[#0077C8]",
    type: "Family",
  },
  {
    title: "Group Tours",
    icon: <Users className="h-6 w-6" />,
    image: "/images/Group Tours.png",
    desc: "Perfect for friends, corporate teams, or special occasions. Group pricing with seamless coordination.",
    color: "from-black/30 to-purple-700/10",
    badge: "bg-purple-100 text-purple-700",
    type: "Group",
  },
  {
    title: "International Holidays",
    icon: <Globe className="h-6 w-6" />,
    image: "/images/city.jpg",
    desc: "Explore top destinations worldwide with complete planning — flights, hotels, visas and sightseeing included.",
    color: "from-black/30 to-orange-600/10",
    badge: "bg-amber-100 text-amber-700",
    type: "International",
  },
  {
    title: "Domestic Getaways",
    icon: <MapPin className="h-6 w-6" />,
    image: "/images/Domestic.jpeg",
    desc: "Discover the best of India with ease. From hill stations to beach retreats, explore India like never before.",
    color: "from-black/30 to-emerald-600/10",
    badge: "bg-green-100 text-green-700",
    type: "Domestic",
  },
];

export default function HolidayPackages() {
  return (
    <section id="packages" className="py-24 bg-[#f8faff]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block bg-[#0077C8]/10 text-[#0077C8] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
              Plan Your Trip With Us
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Holiday Packages
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Complete travel packages, Flights, hotels, and sightseeing.
              Customized to your needs and budget. Satisfaction guaranteed.
            </p>
          </motion.div>
        </div>

        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <span
                className={`text-xs font-semibold px-3 py-1.5 rounded-full ${pkg.badge} cursor-pointer`}
              >
                {pkg.title}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 group h-full flex flex-col cursor-pointer">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        `https://placehold.co/600x400/dbeafe/1e40af?text=${encodeURIComponent(pkg.type)}`;
                    }}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${pkg.color} opacity-60 group-hover:opacity-70 transition-opacity`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 text-white">
                      {pkg.icon}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg leading-tight drop-shadow">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                <CardContent className="p-5 flex flex-col flex-grow bg-white">
                  <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                    {pkg.desc}
                  </p>
                  <Button
                    className="w-full mt-4 rounded-full text-sm"
                    size="sm"
                    onClick={() =>
                      window.open(
                        `https://wa.me/919384747667?text=${encodeURIComponent(
                          `Hi, I'm interested in the ${pkg.title}. Please share more details.`,
                        )}`,
                        "_blank",
                      )
                    }
                  >
                    <Plane className="h-3.5 w-3.5 mr-1.5" />
                    Enquire Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* <motion.p
          className="text-center text-gray-500 mt-10 text-sm italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Every package is flexible and can be customized to match your travel needs, ensuring a truly personalized experience.
        </motion.p>

        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button size="lg" className="rounded-full px-10">
            Enquire About Packages
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
}
