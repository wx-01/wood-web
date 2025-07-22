import React from "react";
import Background from "../components/Background";

const Home = () => {
  return (
    <section className="relative min-h-[10px] mt-50 bg-white flex items-center justify-center text-center z-30">
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
