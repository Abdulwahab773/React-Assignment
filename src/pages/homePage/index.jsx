import axios from "axios";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let response = await axios.get("https://fakestoreapi.com/products");
      setAllProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto mt-25 px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-gray-800 mb-4">
            Welcome to{" "}
            <span className="font-bold text-blue-800"> Wahabstore </span>
          </h1>
          <p className="text-gray-600 mb-6">
            Find the best products at unbeatable prices
          </p>
          <input
            onChange={(e) => setUserInput(e.target.value)}
            type="text"
            placeholder="Search products..."
            className="w-full max-w-md border border-blue-500 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-800 outline-none"
            value={userInput}
          />
        </div>

        {loading ? (
          <div className="flex flex-col gap-3 justify-center items-center">
            <div className="relative w-16 h-16 mt-20">
              <div className="absolute w-full h-full rounded-full border-4 border-t-blue-500 border-gray-300 animate-spin"></div>
            </div>
            <div className="text-xl font-semibold">Please Wait...</div>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {allProducts.map((data) => {
              
              let { title, image, id } = data;
              if (title.toLowerCase().includes(userInput.toLowerCase())) {
                return (
                  <div
                    key={id}
                    className={`bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer`}
                  >
                    <div className="h-48 flex items-center justify-center bg-gray-100">
                      <img
                        src={image}
                        alt={title}
                        className="h-full object-contain p-4"
                      />
                    </div>

                    <div className="p-4 flex flex-col justify-between h-40">
                      <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
                        {title}
                      </h2>
                      <Link to={`/product/${id}`}>
                        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer">
                          See More
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default HomePage;
