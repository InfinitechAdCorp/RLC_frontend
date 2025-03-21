"use client";

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

type Property = {
  path: string;
  title: string;
  description: string;
  image: string;
};

export default function PropertyCards() {
  const router = useRouter();

  const handleViewProperty = (path: string) => {
    router.push(path);
  };

  const properties: Property[] = [
    {
      path: '/properties/property-1',
      title: "A Future-Proof Investment",
      description: "Watch your property grow in value over time.",
      image: "/RLC-Residences.jpg",
    },
    {
      path: '/properties/property-2',
      title: "A Location That Works for You",
      description:
        "Stay close to business hubs, leisure spots, and daily essentials—right where you need to be.",
      image: "/RLC-Residences.jpg",
    },
    {
      path: '/properties/property-3',
      title: "A Space That Adapts With You",
      description:
        "Enhance everyday life with spaces thoughtfully crafted for your comfort and lifestyle.",
      image: "/RLC-Residences.jpg",
    },
    {
      path: '/properties/property-4',
      title: "A Plan That Meets Your Budget",
      description: "Own a home that aligns with your financial goals.",
      image: "/RLC-Residences.jpg",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center">
      {properties.map((property, index) => (
        <motion.div
          key={property.path}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
          className="w-full md:w-1/3 p-6 bg-white rounded-xl shadow-lg"
        >
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold mb-2">{property.title}</h3>
          <p className="text-gray-600">{property.description}</p>
          <button
            onClick={() => handleViewProperty(property.path)}
            className="text-blue-500 mt-4 inline-block"
          >
            View Property
          </button>
        </motion.div>
      ))}
    </div>
  );
}
