import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const services = [
  {
    title: " Website Development",
    icon: "💻",
    description:
      "I Create Websites based on your ready-made design. Whether it's a landing page or a business card website. I will make it look great and work smoothly on all devices.",
  },
  {
    title: "Website Design",
    icon: "✏️",
    description:
      "Ican design a website for you from scratch. I will create modern, responsive, and user-friendly designs that match your brand and goals. ",
  },
  {
    title: "Website Maintenance",
    icon: "🌐",
    description:
      " I can provide ongoing website maintenance services to ensure that your website is up-to-date, secure, and optimized for performance. ",
  },
];

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    Aos.refresh();
  }, []);
  return (
    <div className="flex items-center justify-center">
      <div className="container mx-auto px-4 py-1 border-b-2 border-gray-400 rounded-lg">
        <h2
          data-aos="fade-down"
          className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-950 to-blue-200 my-8"
        >
          MY SERVICES
        </h2>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 my-8"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg p-6 shadow-lg bg-gray-800 text-white"
            >
              <span className="text-6xl mb-4">{service.icon}</span>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-center text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
