"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [showCards, setShowCards] = useState([false, false, false]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCards([true, true, true]);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const cardData = [
    {
      title: "I'm a Future Homeowner",
      description: "Experience the elegance of modern living spaces.",
    },
    {
      title: "I'm a Home Investor",
      description: "Find your home in the most desirable areas.",
    },
    {
      title: "I'm a Renter",
      description: "We ensure a seamless home-buying experience.",
    },
    
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/RLC-Residences.jpg)" }}
      >
        <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black bg-opacity-50 text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Make Beautiful Memories
          </h1>
          <h2 className="text-white text-2xl md:text-3xl font-semibold mb-2">
            Take a Personalized Journey Home With Us
          </h2>
          <p className="text-white text-base md:text-lg mb-2">
            We Will Always Have a Place for You!
          </p>
          <p className="text-white text-base md:text-lg mb-8">
            Just Let Us Get to Know You More...
          </p>

          {/* Cards Section */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full max-w-4xl">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="w-full md:w-1/3 p-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-lg"
              >
                <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                  {card.title}
                </h3>
                <p className="text-white text-sm md:text-base">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section className="py-16 bg-gray-100">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8">Discover Your Path</h2>
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center">
      
      {/* Card 1 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full md:w-1/3 p-6 bg-white rounded-xl shadow-lg"
      >
        <img
          src="/RLC-Residences.jpg"
          alt="A Future-Proof Investment"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-bold mb-2">A Future-Proof Investment</h3>
        <p className="text-gray-600">Watch your property grow in value over time.</p>
        <a href="#" className="text-blue-500 mt-4 inline-block">Learn More</a>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full md:w-1/3 p-6 bg-white rounded-xl shadow-lg"
      >
        <img
          src="/RLC-Residences.jpg"
          alt="A Location That Works for You"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-bold mb-2">A Location That Works for You</h3>
        <p className="text-gray-600">Stay close to business hubs, leisure spots, and daily essentials—right where you need to be.</p>
        <a href="#" className="text-blue-500 mt-4 inline-block">Learn More</a>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="w-full md:w-1/3 p-6 bg-white rounded-xl shadow-lg"
      >
        <img
          src="/RLC-Residences.jpg"
          alt="A Space That Adapts With You"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-bold mb-2">A Space That Adapts With You</h3>
        <p className="text-gray-600">Enhance everyday life with spaces thoughtfully crafted for your comfort and lifestyle.</p>
        <a href="#" className="text-blue-500 mt-4 inline-block">Learn More</a>
      </motion.div>

      {/* Card 4 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="w-full md:w-1/3 p-6 bg-white rounded-xl shadow-lg"
      >
        <img
          src="/RLC-Residences.jpg"
          alt="A Plan That Meets Your Budget"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-bold mb-2">A Plan That Meets Your Budget</h3>
        <p className="text-gray-600">Own a home that aligns with your financial goals.</p>
      </motion.div>
      
    </div>
  </div>
</section>

    </>
  );
}
