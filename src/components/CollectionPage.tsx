import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import PageHeader from "./PageHeader";

type Gender = "men" | "women";

interface CollectionItem {
  image: string;
  name: string;
}

interface Collection {
  title: string;
  description: string;
  men: CollectionItem[];
  women: CollectionItem[];
}

const collections: Record<string, Collection> = {
  summer: {
    title: "Summer Collection",
    description: `Our summer line focuses on the perfect blend of performance and comfort in warmer conditions. Featuring moisture wicking fabrics, UV-protective materials, and breathable designs, our summer wear is tailored for those who demand style and functionality. From lightweight t-shirts, tank tops, and shorts to athletic wear and casual streetwear, we provide the ideal mix of flexibility and durability for outdoor sports, gym sessions, or casual outings in the heat.`,
    men: Array.from({ length: 6 }, (_, i) => ({
      image: `/src/assest/summerCollection/men/${i + 1}.jpg`,
      name: `Men's Summer Item ${i + 1}`,
    })),
    women: Array.from({ length: 6 }, (_, i) => ({
      image: `/src/assest/summerCollection/women/${i + 1}.jpg`,
      name: `Women's Summer Item ${i + 1}`,
    })),
  },
  winter: {
    title: "Winter Collection",
    description: ` As the colder months arrive, Trona creations shifts focus to delivering winter garments designed to provide maximum warmth without sacrificing comfort or style. Our winter collection is crafted with advanced insulation materials, water-resistant fabrics, and innovative designs that ensure optimal performance during outdoor activities like skiing, snowboarding, and hiking, as well as everyday wear during the chillier 
months. 13 Each winter garment is built to withstand harsh conditions while keeping you cozy and stylish. Our jackets, coats, thermals, and layering options are designed to maintain warmth, moisture control, and breathability, ensuring that our customers stay comfortable no matter how low the temperature drops.`,
    men: Array.from({ length: 14 }, (_, i) => ({
      image: `/src/assest/winterCollection/men/${i + 1}.jpg`,
      name: `Men's Winter Item ${i + 1}`,
    })),
    women: Array.from({ length: 6 }, (_, i) => ({
      image: `/src/assest/winterCollection/women/${i + 1}.jpg`,
      name: `Women's Winter Item ${i + 1}`,
    })),
  },
  sports: {
    title: "Sports Collection",
    description: "Performance wear for active lifestyles",
    men: Array.from({ length: 6 }, (_, i) => ({
      image: `/src/assest/sportsCollection/men/${i + 1}.jpg`,
      name: `Men's Sports Item ${i + 1}`,
    })),
    women: Array.from({ length: 6 }, (_, i) => ({
      image: `/src/assest/sportsCollection/women/${i + 1}.jpg`,
      name: `Women's Sports Item ${i + 1}`,
    })),
  },
};

export default function CollectionPage() {
  const { type } = useParams<{ type: string }>();
  const [activeGender, setActiveGender] = useState<Gender>("women");
  const location = useLocation();

  if (!type || !collections[type]) {
    return <div>Collection not found</div>;
  }

  const collection = collections[type];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white pt-20">
      <PageHeader
        title={collection.title}
        description={collection.description}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center gap-4 mb-12">
          {["men", "women"].map((gender) => (
            <button
              key={gender}
              onClick={(event) => {
                event.preventDefault(); // Stops default behavior
                setActiveGender(gender as Gender);
              }}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeGender === gender
                  ? "bg-gradient-to-r from-blue-900 to-sky-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-50 hover:shadow"
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
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group hover-card overflow-hidden rounded-xl glass-card"
            >
              <div className="relative h-96">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
