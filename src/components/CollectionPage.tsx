import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

type Gender = "men" | "women";

const collections = {
  summer: {
    title: "Summer Collection",
    description: `Our summer line focuses on the perfect blend of performance and comfort in warmer conditions. Featuring moisture wicking fabrics, UV-protective materials, and breathable designs, our summer wear is tailored for those who demand style and functionality. From lightweight t-shirts, tank tops, and shorts to athletic wear and casual streetwear, we provide the ideal mix of flexibility and durability for outdoor sports, gym sessions, or casual outings in the heat.`,
    men: [
      {
        name: "Cotton T-Shirt",
        image:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80",
      },
      {
        name: "Linen Shirt",
        image:
          "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80",
      },
      {
        name: "Casual Shorts",
        image:
          "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80",
      },
    ],
    women: [
      {
        name: "Summer Dress",
        image:
          "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80",
      },
      {
        name: "Cotton Blouse",
        image:
          "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80",
      },
      {
        name: "Casual Skirt",
        image:
          "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&q=80",
      },
    ],
  },
  winter: {
    title: "Winter Collection",
    description: `As the colder months arrive, Trona creations shifts focus to delivering winter garments designed to provide maximum warmth without sacrificing comfort or style. Our winter collection is crafted with advanced insulation materials, water-resistant fabrics, and innovative designs that ensure optimal performance during outdoor activities like skiing, snowboarding, and hiking, as well as everyday wear during the chillier months.Each winter garment is built to withstand harsh conditions while keeping you cozy and stylish. Our jackets, coats, thermals, and layering options are designed to maintain warmth, moisture control, and breathability, ensuring that our customers stay comfortable no matter how low the temperature drops.`,
    men: [
      {
        name: "Winter Jacket",
        image:
          "https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?auto=format&fit=crop&q=80",
      },
      {
        name: "Wool Sweater",
        image:
          "https://images.unsplash.com/photo-1638391437789-5c9be92d2723?auto=format&fit=crop&q=80",
      },
      {
        name: "Thermal Pants",
        image:
          "https://images.unsplash.com/photo-1584865288642-42078afe6942?auto=format&fit=crop&q=80",
      },
    ],
    women: [
      {
        name: "Winter Coat",
        image:
          "https://images.unsplash.com/photo-1548624149-f9b1859aa7d0?auto=format&fit=crop&q=80",
      },
      {
        name: "Knit Sweater",
        image:
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80",
      },
      {
        name: "Wool Pants",
        image:
          "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80",
      },
    ],
  },
  sports: {
    title: "Sports Collection",
    description:
      "Engineered for performance, our sports collection combines functionality with style. Features moisture-wicking fabrics, stretchable materials, and designs that move with you.",
    men: [
      {
        name: "Performance Shirt",
        image:
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80",
      },
      {
        name: "Training Shorts",
        image:
          "https://images.unsplash.com/photo-1517940310602-26535839fe84?auto=format&fit=crop&q=80",
      },
      {
        name: "Sports Jacket",
        image:
          "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?auto=format&fit=crop&q=80",
      },
    ],
    women: [
      {
        name: "Sports Top",
        image:
          "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80",
      },
      {
        name: "Training Leggings",
        image:
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80",
      },
      {
        name: "Sports Bra",
        image:
          "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?auto=format&fit=crop&q=80",
      },
    ],
  },
};

export default function CollectionPage() {
  const { type } = useParams<{ type: keyof typeof collections }>();
  const [activeGender, setActiveGender] = useState<Gender>("women");

  if (!type || !collections[type]) {
    return <div>Collection not found</div>;
  }

  const collection = collections[type];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <Link
          to="/#products"
          className="inline-flex items-center text-sky-600 hover:text-sky-700 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Collections
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {collection.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {collection.description}
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12">
          {["men", "women"].map((gender) => (
            <button
              key={gender}
              onClick={() => setActiveGender(gender as Gender)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeGender === gender
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {gender.charAt(0).toUpperCase() + gender.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collection[activeGender].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative h-96">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
