import React from "react";

function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
        Contact Us
      </h1>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        Have questions, feedback, or need support? Our team at
        <span className="font-semibold text-blue-800"> Wahabstore </span>
        is always ready to help you.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-semibold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600">
            Whether you’re looking for more information or just want to share
            your thoughts, feel free to reach out. We value our customers’
            voices.
          </p>

          <div className="space-y-6">
            <div>
              <p className="text-gray-800 font-medium">📍 Address:</p>
              <p className="text-gray-600">
                123 Wahabstore Street, Karachi, Pakistan
              </p>
            </div>
            <div>
              <p className="text-gray-800 font-medium">📧 Email:</p>
              <p className="text-gray-600">support@wahabstore.com</p>
            </div>
            <div>
              <p className="text-gray-800 font-medium">📞 Phone:</p>
              <p className="text-gray-600">+92 302 2711501</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-2xl rounded-2xl p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-blue-600 text-white py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
