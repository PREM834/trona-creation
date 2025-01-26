import { motion } from "framer-motion";
import { User, Heart, Leaf } from "lucide-react";

const profiles = [
  {
    icon: User,
    title: "Athletes",
    description:
      "Performance-focused individuals who demand the best from their sportswear",
  },
  {
    icon: Heart,
    title: "Fashion-Conscious",
    description:
      "Style-savvy customers who appreciate trendy and comfortable clothing",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious",
    description:
      "Environmentally aware buyers who prioritize sustainable fashion",
  },
];

export default function CustomerProfile() {
  return (
    <section className="py-24 bg-gray-50" id="customers">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Customer Profile
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our diverse customer base shares a common appreciation for quality,
            style, and sustainability
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <profile.icon className="w-12 h-12 text-sky-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {profile.title}
              </h3>
              <p className="text-gray-600">{profile.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
