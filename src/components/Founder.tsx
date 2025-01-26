import { motion } from "framer-motion";

export default function Founder() {
  return (
    <section className="py-24 bg-white" id="founder">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Founder
            </h2>
          </div>

          <div className="bg-sky-50 rounded-lg overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src="/src/assest/founderImage/founder.png"
                  alt="Arvind Kr. Mishra - Founder of Trona Creations"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Arvind Kr. Mishra
                </h3>
                <p className="text-gray-600 mb-6">
                  As the founder of Trona Creations, Arvind Kr. Mishra brings
                  his vision of combining style, comfort, and sustainability to
                  life. His dedication to creating high-quality sports and
                  casual wear has been the driving force behind our brand's
                  success.
                </p>
                <blockquote className="text-lg italic text-gray-700 border-l-4 border-sky-500 pl-4">
                  "Our goal is to create clothing that not only looks good but
                  feels good, while being mindful of our impact on the
                  environment. Every piece we create is a step towards that
                  vision."
                </blockquote>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
