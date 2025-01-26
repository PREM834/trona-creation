import { useState } from "react";
import { useParams } from "react-router-dom";
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

// Dynamically import images using import.meta.glob
const summerMenImages = import.meta.glob(
  "../assest/summerCollection/men/*.jpg",
  { eager: true }
);
const summerWomenImages = import.meta.glob(
  "../assest/summerCollection/women/*.jpg",
  { eager: true }
);
const winterMenImages = import.meta.glob(
  "../assest/winterCollection/men/*.jpg",
  { eager: true }
);
const winterWomenImages = import.meta.glob(
  "../assest/winterCollection/women/*.jpg",
  { eager: true }
);
const sportsMenImages = import.meta.glob(
  "../assest/sportsCollection/men/*.jpg",
  { eager: true }
);
const sportsWomenImages = import.meta.glob(
  "../assest/sportsCollection/women/*.jpg",
  { eager: true }
);

const collections: Record<string, Collection> = {
  summer: {
    title: "Summer Collection",
    description: `Our summer line focuses on the perfect blend of performance and comfort in warmer conditions. Featuring moisture wicking fabrics, UV-protective materials, and breathable designs, our summer wear is tailored for those who demand style and functionality.`,
    men: Object.keys(summerMenImages).map((path, index) => ({
      image: (summerMenImages[path] as any).default,
      name: `Men's Summer Item ${index + 1}`,
    })),
    women: Object.keys(summerWomenImages).map((path, index) => ({
      image: (summerWomenImages[path] as any).default,
      name: `Women's Summer Item ${index + 1}`,
    })),
  },
  winter: {
    title: "Winter Collection",
    description: `As the colder months arrive, Trona creations shifts focus to delivering winter garments designed to provide maximum warmth without sacrificing comfort or style.`,
    men: Object.keys(winterMenImages).map((path, index) => ({
      image: (winterMenImages[path] as any).default,
      name: `Men's Winter Item ${index + 1}`,
    })),
    women: Object.keys(winterWomenImages).map((path, index) => ({
      image: (winterWomenImages[path] as any).default,
      name: `Women's Winter Item ${index + 1}`,
    })),
  },
  sports: {
    title: "Sports Collection",
    description: "Performance wear for active lifestyles",
    men: Object.keys(sportsMenImages).map((path, index) => ({
      image: (sportsMenImages[path] as any).default,
      name: `Men's Sports Item ${index + 1}`,
    })),
    women: Object.keys(sportsWomenImages).map((path, index) => ({
      image: (sportsWomenImages[path] as any).default,
      name: `Women's Sports Item ${index + 1}`,
    })),
  },
};

export default function CollectionPage() {
  const { type } = useParams<{ type: string }>();
  const [activeGender, setActiveGender] = useState<Gender>("women");

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
                event.preventDefault();
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
