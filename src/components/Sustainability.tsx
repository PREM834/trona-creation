import { motion } from 'framer-motion';
import { Recycle, Leaf, Globe } from 'lucide-react';

const initiatives = [
  {
    icon: Recycle,
    title: 'Recycled Materials',
    description: 'Using recycled polyester and sustainable cotton in our products'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Production',
    description: 'Minimizing waste and reducing our carbon footprint'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Partnering with sustainable suppliers worldwide'
  }
];

export default function Sustainability() {
  return (
    <section className="py-24 bg-gradient-to-b from-green-50 to-white" id="sustainability">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sustainability</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Trona creations, sustainability is woven into every layer of our 
process. From sourcing eco-friendly materials to using energy
efficient manufacturing techniques, we are dedicated to reducing 
our environmental footprint. Our focus on innovative fabrics, such 
as recycled polyester and organic cotton, ensures that we’re not 
only creating high-performance wear but also contributing to a 
greener future.
 We continuously invest in research and development to 
incorporate the latest technology in fabric performance and 
garment design. Our goal is to remain ahead of trends in both 
fashion and functionality while keeping sustainability at the core 
of our brand.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <initiative.icon className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{initiative.title}</h3>
              <p className="text-gray-600">{initiative.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}