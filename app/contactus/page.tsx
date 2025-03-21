'use client';

import { title } from "@/components/primitives";
import { useState, useEffect } from "react";

export default function ContactusPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    country: "",
    property: "",
    inquiryType: "",
    awarenessSource: "",
    message: "",
  });

  const [countries, setCountries] = useState<string[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        const countryList = data.map((country: any) => country.name.common).sort();
        setCountries(countryList);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchCountries();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    alert("Message Sent!");
  };

  return (
    <div className="max-w-lg mx-auto p-8">
      <h1 className={title()}>Get in Touch With Us!</h1>
      <p className="text-gray-600 mb-4">Please feel free to call, email, or chat with us to find out more about which RLC Residences property is best for you.</p>
      
      {/* Card Container */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Section */}
          <div className="flex gap-4">
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
          </div>

          {/* Contact Section */}
          <div className="flex gap-4">
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
            <input type="text" name="mobileNumber" placeholder="Mobile Number" value={formData.mobileNumber} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
          </div>

          {/* Country and Property Section */}
          <div className="flex gap-4">
            <select name="country" value={formData.country} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded">
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
            <input type="text" name="property" placeholder="Property" value={formData.property} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
          </div>

          {/* Inquiry and Awareness Section */}
          <div className="flex gap-4">
            <select name="inquiryType" value={formData.inquiryType} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded">
              <option value="">Type of Inquiry</option>
              <option value="New Client">New Client</option>
              <option value="Repeat Client">Repeat Client</option>
              <option value="After Sales">After Sales</option>
              <option value="Other">Other</option>
            </select>
            <input type="text" name="awarenessSource" placeholder="Source of Awareness" value={formData.awarenessSource} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
          </div>

          {/* Message Section */}
          <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
          
          {/* Submit Button */}
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Send Message</button>
        </form>
      </div>
    </div>
  );
}
