import { motion } from "framer-motion";
import { History, Heart, Target } from "lucide-react";

const features = [
  {
    icon: History,
    title: "Our History",
    description: `Founded in 2023, Trona Creations entered the competitive world of sports and casual wear with a singular vision: to create high-quality, versatile clothing that seamlessly blends performance, comfort, and style across all seasons. From the very beginning, our goal was to design garments that not only catered to the specific needs of athletes but also provided fashionable, everyday wear for those who live active lifestyles. We sought to deliver both summer and winter collections that would elevate the standard of quality and design within the industry.`,
  },
  {
    icon: Heart,
    title: "Quality & Craftsmanship",
    description: `At Trona Creations, quality is our hallmark. From the first stitch to the final product, we are dedicated to ensuring that every garment we produce meets the highest standards. Our summer collections feature lightweight, breathable fabrics that keep you cool and comfortable in the hottest conditions, while our winter garments are made with insulated, durable materials that offer warmth and protection without compromising on style.`,
  },
  {
    icon: Target,
    title: "Our Mission",
    description: `Our mission is to provide exceptional sports and casual wear that empowers people to stay active, comfortable, and stylish throughout every season. We aim to produce garments that meet the diverse needs of athletes, fitness enthusiasts, and anyone looking to combine high-performance functionality with everyday wearability. By focusing on quality materials, cutting-edge technology, and thoughtful design, we create clothes that perform as well as they look.`,
  },
];

export default function About() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trona creations is a clothing brand based in India that was founded
            in 2023. The brand is known for its high-quality and comfort
            apparel. Trona creations offers a wide range of products including ,
            t shirts, Tops , sweatshirt , jackets, trousers, pants, Pyjamas
            ,cord sets, tracksuits, and other.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center p-6 rounded-lg bg-sky-50"
            >
              <feature.icon className="w-12 h-12 text-sky-600 mx-auto mb-4" />
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
