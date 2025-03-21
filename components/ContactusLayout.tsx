import React, { useState, useEffect } from "react";

// ContactusLayout component
const ContactusLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 py-12 px-4 md:px-8">
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

      {/* Form or Children on the right side */}
      <div className="w-full md:w-1/2 bg-white shadow-xl rounded-xl p-8 md:p-12 text-center">
        {children}
      </div>
    </section>
  );
};

interface ContactFormProps {
  onSubmit: (formData: any) => void;
}

const ContactusForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
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

  const [countries, setCountries] = useState<string[]>([]); // State to store country options
  const [loading, setLoading] = useState<boolean>(true); // To handle loading state

  useEffect(() => {
    // Fetch country data from an API
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        // Sort countries alphabetically before setting them to state
        const sortedCountries = data
          .map((country: any) => country.name.common)
          .sort(); // Sort alphabetically
        setCountries(sortedCountries);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching country data:", error);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="mobileNumber"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Select Country</option>
          {loading ? (
            <option disabled>Loading countries...</option>
          ) : (
            countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))
          )}
        </select>
        <input
          type="text"
          name="property"
          placeholder="Property"
          value={formData.property}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <select
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Select Inquiry Type</option>
          <option value="general">General Inquiry</option>
          <option value="product">Product Inquiry</option>
          <option value="service">Service Inquiry</option>
        </select>
        <input
          type="text"
          name="awarenessSource"
          placeholder="How did you hear about us?"
          value={formData.awarenessSource}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full p-2 border border-gray-300 rounded"
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Send Message
      </button>
    </form>
  );
};


export { ContactusForm };
export default ContactusLayout;
