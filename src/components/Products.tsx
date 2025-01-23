import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sun, Snowflake, Dumbbell } from 'lucide-react';

const collections = [
  {
    id: 'summer',
    title: 'Summer Collection',
    Icon: Sun,
    description: 'Discover our lightweight and breathable summer wear designed for ultimate comfort in warm weather.',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80'
  },
  {
    id: 'winter',
    title: 'Winter Collection',
    Icon: Snowflake,
    description: 'Stay warm and stylish with our winter collection featuring thermal insulation and water-resistant materials.',
    image: 'https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?auto=format&fit=crop&q=80'
  },
  {
    id: 'sports',
    title: 'Sports Collection',
    Icon: Dumbbell,
    description: 'Engineered for performance, our sports collection combines functionality with style.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80'
  }
];

export default function Products() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gray-50" id="products">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Collections</h2>
          <p className="text-lg text-gray-600">
            Discover our seasonal collections designed for comfort and style
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => navigate(`/collection/${collection.id}`)}
            >
              <div className="relative h-96">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-2">
                    <collection.Icon className="w-6 h-6 mr-2" />
                    <h3 className="text-2xl font-bold">{collection.title}</h3>
                  </div>
                  <p className="text-sm opacity-90">{collection.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}