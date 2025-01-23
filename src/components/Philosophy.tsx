import { motion } from 'framer-motion';
import { ThumbsUp, Shirt } from 'lucide-react';

export default function Philosophy() {
  const philosophies = [
    {
      icon: ThumbsUp,
      title: 'Quality',
      description: 'We believe in creating garments that stand the test of time. Every stitch, every fabric, and every design element is carefully chosen to ensure the highest standards of quality. Our commitment to excellence is reflected in the durability and finish of each piece we create.'
    },
    {
      icon: Shirt,
      title: 'Comfort',
      description: 'Comfort is at the heart of everything we do. We understand that clothing should not just look good but feel great too. Our designs incorporate ergonomic considerations and premium materials to ensure that every garment provides maximum comfort throughout the day.'
    }
  ];

  return (
    <section className="py-24 bg-sky-50" id="philosophy">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Philosophy</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Trona Creations, we believe in creating clothing that combines style, comfort, and sustainability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {philosophies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="inline-block p-4 rounded-full bg-sky-100 mb-6">
                <item.icon className="w-12 h-12 text-sky-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 max-w-md mx-auto">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}