"use client";
import { title } from "@/components/primitives";
import { Image } from "@heroui/react";
import { FaBed } from "react-icons/fa"; // Importing FaBed icon
import {
  FaConciergeBell,
  FaTheaterMasks,
  FaDumbbell,
  FaClinicMedical,
} from "react-icons/fa";
export default function PropertiesPage() {
  return (
    <section className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className={title()}>Properties</h1>

        {/* Property Card */}
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full h-full ">
          <div className="w-full md:w-1/2 h-full">
            {/* Property Image */}
            <Image
              src="/RLC-residences.jpg"
              alt="Property Image"
              width={1000}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 p-6 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-2xl font-semibold">
                AmiSa Private Residences
              </h2>
              <p className="text-gray-500 text-sm mb-4">
                Mactan, City of Lapu-Lapu
              </p>

              <p className="mb-4">
                Wake up to breathtaking sea views at AmiSa Private Residences!
                With resort-style amenities catering to your every need and
                smart home features for ultimate ease, your daily life feels
                like a holiday in your own home.
              </p>

              <div className="mb-4">
                <h3 className="font-semibold">Unit Types:</h3>
                <div className="flex space-x-2">
                  <span className="badge border border-dark text-dark rounded-full px-3 py-1 flex items-center">
                    <FaBed className="mr-2" /> 1 Bedroom
                  </span>
                  <span className="badge border border-dark text-dark rounded-full px-3 py-1 flex items-center">
                    <FaBed className="mr-2" /> 2 Bedroom
                  </span>
                  <span className="badge border border-dark text-dark rounded-full px-3 py-1 flex items-center">
                    <FaBed className="mr-2" /> Studio
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold">Amenities and Facilities:</h3>
                <div className="flex space-x-2">
                  <span className="badge border border-dark text-dark rounded-full px-3 py-1 flex items-center">
                    <FaConciergeBell className="mr-2" /> Work Lounge
                  </span>
                  <span className="badge border border-dark text-dark rounded-full px-3 py-1 flex items-center">
                    <FaTheaterMasks className="mr-2" /> Private Theatre
                  </span>
                  <span className="badge border border-dark text-dark rounded-full px-3 py-1 flex items-center">
                    <FaDumbbell className="mr-2" /> Yoga Center
                  </span>
                  <span className="badge border border-dark text-dark rounded-full px-3 py-1 flex items-center">
                    <FaClinicMedical className="mr-2" /> Clinic
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Price Range:</h3>
              <p className="text-lg font-bold text-gray-800">
                ₱8.02M+ - ₱54.6M+
              </p>
            </div>

            {/* Learn More Button */}
            <div className="mt-4">
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
