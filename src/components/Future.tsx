import { motion } from "framer-motion";
import { Target, TrendingUp, Users } from "lucide-react";

const goals = [
  {
    icon: Target,
    title: "Global Expansion",
    description:
      "Reaching new markets while maintaining our commitment to quality and sustainability",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description:
      "Continuously developing new technologies and designs for enhanced performance",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Building stronger relationships with our customers and partners worldwide",
  },
];

export default function Future() {
  return (
    <section
      className="py-24 bg-gradient-to-b from-sky-50 to-white"
      id="future"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Looking Ahead
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our vision extends beyond today as we continue to innovate and grow,
            always staying true to our core values of quality, sustainability,
            and customer satisfaction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <goal.icon className="w-12 h-12 text-sky-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {goal.title}
              </h3>
              <p className="text-gray-600">{goal.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
