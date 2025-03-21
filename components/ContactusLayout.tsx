import React, { useState, useEffect } from "react";
const ContactusLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col items-center justify-center gap-8 py-12 px-4 md:px-8">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-xl p-8 md:p-12 text-center">
        {children}
      </div>
    </section>
  );
};

export default ContactusLayout;

interface ContactFormProps {
  onSubmit: (formData: any) => void;
}

const ContactusForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      mobileNumber: '',
      country: '',
      property: '',
      inquiryType: '',
      awarenessSource: '',
      message: '',
    });
  
    const [countries, setCountries] = useState<string[]>([]); // State to store country options
    const [loading, setLoading] = useState<boolean>(true); // To handle loading state
  
    useEffect(() => {
      // Fetch country data from an API
      const fetchCountries = async () => {
        try {
          const response = await fetch('https://restcountries.com/v3.1/all');
          const data = await response.json();
          // Sort countries alphabetically before setting them to state
          const sortedCountries = data
            .map((country: any) => country.name.common)
            .sort(); // Sort alphabetically
          setCountries(sortedCountries);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching country data:', error);
          setLoading(false);
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
      onSubmit(formData);
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4">
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
  
        <div className="flex gap-4">
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
  
        <div className="flex gap-4">
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
  
        <div className="flex gap-4">
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
  
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Send Message
        </button>
      </form>
    );
  };

export { ContactusForm };
