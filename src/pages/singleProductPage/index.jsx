import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";

function SingleProductCard() {
  const params = useParams();

  let [singleProduct, setSingleProduct] = useState({});


  useEffect(() => {
    window.scrollTo(0, 0);
    getSingleProduct();
  }, []);

  const getSingleProduct = async () => {
    try {
      let res = await axios.get(
        `https://fakestoreapi.com/products/${params.id}`
      );
      setSingleProduct({ ...res.data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex justify-center  items-center mt-15 bg-gray-100 p-6">
        <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6">
          <div className="flex-1 flex justify-center">
            <img
              src={singleProduct.image}
              alt={singleProduct.title}
              className="rounded-xl object-contain w-full max-w-sm"
            />
          </div>

          <div className="flex-1 flex flex-col justify-evenly">
            <h1 className="text-3xl font-bold mb-3 text-blue-800">
              {singleProduct.title}
            </h1>
            <p className="text-gray-600 mb-4">{singleProduct.description}</p>

            <div className="flex items-center mb-4 bg-gray-100 px-3 py-2 rounded-lg shadow-sm">
              <span className="text-gray-800 font-medium">Rating:</span>
              <span className="ml-2 text-blue-600 font-semibold">
                {singleProduct?.rating?.rate} / 5
              </span>
              <span className="ml-2 text-sm text-gray-500">
                ({singleProduct?.rating?.count} reviews)
              </span>
            </div>

            <p className="text-3xl font-semibold text-green-600 mb-6">
              ${singleProduct.price}
            </p>
            <Link
              to="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition-all duration-300 text-center"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default SingleProductCard;
