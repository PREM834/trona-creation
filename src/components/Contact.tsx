import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 bg-sky-50" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">
            Get in touch with us for any inquiries or collaborations
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 text-sky-600 mr-2" />
                <h3 className="text-xl font-semibold">Email Us</h3>
              </div>
              <a
                href="mailto:tronacreations@gmail.com"
                className="inline-block bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition-colors"
              >
                Send Email
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <a
                href="https://maps.app.goo.gl/dL4w7W2shZCK9tEQ6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mb-6 cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <MapPin className="w-6 h-6 text-sky-600 mr-2 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-sky-600">
                  Visit Us
                </h3>
              </a>
              <p className="text-gray-600">
                Our team is ready to assist you with any questions about our
                products and sustainable practices.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
