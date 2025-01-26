import { motion } from "framer-motion";
import { Heart, Shield, Clock, Handshake } from "lucide-react";

const strengths = [
  {
    icon: Heart,
    title: "Loyalty",
    description:
      "Building lasting relationships through consistent quality and trust",
  },
  {
    icon: Shield,
    title: "Reliability",
    description:
      "Delivering dependable products that meet the highest standards",
  },
  {
    icon: Clock,
    title: "Efficiency",
    description: "Quick delivery without compromising on quality",
  },
  {
    icon: Handshake,
    title: "Commitment",
    description: "Dedicated to our stakeholders and long-term success",
  },
];

export default function Strengths() {
  return (
    <section className="py-24 bg-white" id="strengths">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Strengths
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            What sets us apart is our unwavering commitment to excellence in
            every aspect of our business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-sky-50 p-6 rounded-lg text-center"
            >
              <strength.icon className="w-12 h-12 text-sky-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {strength.title}
              </h3>
              <p className="text-gray-600">{strength.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
