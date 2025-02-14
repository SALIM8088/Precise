import React from "react";

const Services = () => {
  return (
    <section id="services" className="min-h-screen flex flex-col justify-center items-center p-10 bg-green-100 text-center">
      <h2 className="text-3xl font-bold mb-4">Our Services</h2>
      <p className="text-lg text-gray-700 mb-4">
        We offer high-quality services tailored to meet our clients' needs. Our team is dedicated to delivering excellence in every project.
      </p>
      <ul className="space-y-2 text-lg text-gray-800">
        <li>🔹 <strong>Service 1:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod dui id purus feugiat.</li>
        <li>🔹 <strong>Service 2:</strong> Nulla facilisi. Integer vel tortor non quam varius efficitur at eu nisi.</li>
        <li>🔹 <strong>Service 3:</strong> Suspendisse potenti. Mauris convallis, justo ut fringilla bibendum, nisi orci facilisis ligula.</li>
      </ul>
    </section>
  );
};

export default Services;
