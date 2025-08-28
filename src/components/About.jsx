import React from "react";

function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
        About Us
      </h1>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        Welcome to{" "}
        <span className="font-semibold text-gray-800">WahabStore</span> – your
        go-to place for stylish and affordable products. We bring you a wide
        range of items with a touch of modern simplicity.
      </p>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src="https://cdn.creazilla.com/cliparts/33198/family-shopping-clipart-lg.png"
            alt="About Wahabstore"
            className="rounded-2xl shadow-2xl"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At Wahabstore, we aim to provide the best online shopping experience.
            From fashion to electronics, we curate products that add value to
            your everyday life.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our team works hard to ensure customer satisfaction by bringing in
            quality products at competitive prices. We believe shopping should
            be simple, transparent, and enjoyable.
          </p>
          <button className="px-6 py-3 bg-blue-600 cursor-pointer text-white rounded-xl shadow-md hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
