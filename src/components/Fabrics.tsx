import { motion } from "framer-motion";

const fabrics = [
  {
    name: "Cotton",
    description: "Soft and breathable, perfect for everyday comfort",
    image:
      "https://images.unsplash.com/photo-1633873972250-e69cd8b5e31c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y290dG9ufGVufDB8fDB8fHww",
  },
  {
    name: "Fleece",
    description: "Warm and insulating, ideal for cold weather",
    image:
      "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&q=80",
  },
  {
    name: "Rib",
    description: "Stretchy and form-fitting for maximum mobility",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80",
  },
  {
    name: "Linen",
    description: "Light and airy, perfect for summer wear",
    image:
      "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?auto=format&fit=crop&q=80",
  },
];

export default function Fabrics() {
  return (
    <section className="py-24 bg-gray-50" id="fabrics">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Fabric Choices
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comfort and quality through our carefully selected
            fabrics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {fabrics.map((fabric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative aspect-square">
                <img
                  src={fabric.image}
                  alt={fabric.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center justify-center h-full text-center p-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {fabric.name}
                      </h3>
                      <p className="text-white">{fabric.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
