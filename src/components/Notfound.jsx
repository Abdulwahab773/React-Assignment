import React from "react";
import { Link } from "react-router-dom";

function Notfound() {
  return (
    <section className="flex flex-col items-center justify-center mt-25 text-center px-6">
      <h1 className="text-8xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 max-w-md mb-6">
        Oops! The page you're looking for doesn’t exist or has been moved.
        Please go back to the homepage and continue shopping at
        <span className="font-semibold text-gray-800"> Wahabstore</span>.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-xl mb-50 shadow-md hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>

    </section>
  );
}

export default Notfound;