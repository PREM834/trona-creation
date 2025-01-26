import { motion } from "framer-motion";
import { Globe, Factory, Recycle } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Commitment to Quality Sourcing",
    description:
      "We partner with premium suppliers worldwide to ensure the highest quality materials for our products.",
  },
  {
    icon: Factory,
    title: "Ethical Production Practices",
    description:
      "Our manufacturing processes adhere to strict ethical guidelines and fair labor practices.",
  },
  {
    icon: Recycle,
    title: "Sustainability and Social Responsibility",
    description:
      "We prioritize eco-friendly materials and sustainable production methods to minimize our environmental impact.",
  },
];

export default function Sourcing() {
  return (
    <section className="py-24 bg-white" id="sourcing">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sourcing and Global Partnerships
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From day one, we have made quality sourcing a priority. We work with
            international suppliers and manufacturers to ensure our materials
            meet the highest standards, and we partner with experts from across
            the globe to create garments that blend cutting-edge technology with
            sustainable practices. Our global network allows us to source the
            best fabrics, from lightweight, breathable textiles for summer wear
            to high-performance, insulated materials for winter wear. In
            addition, we are committed to ethical sourcing and production
            practices, ensuring that our partners meet rigorous environmental
            and labor standards. This allows us to deliver high-quality products
            that not only perform well but also reflect our commitment to
            sustainability and social responsibility.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-sky-50 p-6 rounded-lg"
            >
              <feature.icon className="w-12 h-12 text-sky-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
