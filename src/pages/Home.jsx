import React from "react";
import Background from "../components/Background";

const Home = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center text-center">
      <div>
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Home Component Loaded
        </h1>
        <p className="text-lg text-gray-600">
          This is the hero section of wood product website.
        </p>
      </div>
    </section>
  );
};

export default Home;
