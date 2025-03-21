import { Card } from "@heroui/card";

export default function Property1() {
  return (
    <div className="flex items-center justify-center h-screen p-4">
      <Card className="flex w-full h-[400px] max-w-6xl overflow-hidden shadow-lg rounded-lg">
        {/* Left Side - Hero Image */}
        <div className="w-2/5 h-full">
          <img 
            src="/RLC-residences.jpg" 
            alt="Property 1" 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Right Side - Property Details */}
        <div className="w-3/5 p-6">
          <h2 className="text-2xl font-bold mb-4">RLC Residences</h2>
          <p className="text-gray-600 mb-4">Experience luxurious living in the heart of the city with RLC Residences. Modern amenities, spacious units, and a vibrant community await you.</p>
          <ul className="list-disc list-inside mb-4">
            <li>2 Bedrooms, 2 Bathrooms</li>
            <li>1,500 sq. ft.</li>
            <li>24/7 Security</li>
            <li>Swimming Pool & Gym</li>
            <li>Nearby Shopping Centers</li>
          </ul>
          <div className="mt-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg mr-4">Schedule a Viewing</button>
            <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-lg">Contact Agent</button>
          </div>
        </div>
      </Card>
    </div>
  );
}
