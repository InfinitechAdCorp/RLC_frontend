'use client';

import { title } from "@/components/primitives";
import { useState, useEffect } from "react";
import { ContactusForm } from "@/components/ContactusLayout"; // Import ContactusForm
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
  const handleFormSubmit = (formData: any) => {
    // Handle form submission here, such as sending the data to an API or logging it
    console.log(formData);
  };
  return (
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
    <div className="flex flex-col md:flex-row gap-8">
      {/* Google Maps on the left side */}
      <div className="w-full md:w-1/2 h-80 md:h-auto bg-gray-200 rounded-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4353.838475396577!2d121.05725761116753!3d14.591050585835323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c819abf9fa0f%3A0xd6de5ad44fb87ee1!2sRobinsons%20Galleria%20Ortigas!5e1!3m2!1sen!2sph!4v1742526696179!5m2!1sen!2sph"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Form on the right side */}
      <div className="w-full md:w-1/2 bg-white shadow-xl rounded-xl p-8 md:p-12">
        <ContactusForm onSubmit={handleFormSubmit} />
      </div>
    </div>
  </div>
  </section>
  );
}
