import React from "react";

const TestimonialCard = ({ name, role, message, avatar }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 max-w-sm hover:shadow-lg transition duration-300">
      <div className="flex items-center mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed">“{message}”</p>
    </div>
  );
};

export default TestimonialCard;
