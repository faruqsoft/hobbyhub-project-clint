import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const OfferSection = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Text Section */}
        <Fade direction="left" triggerOnce>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-800 dark:text-white mb-4">
              🎉 Special Offer for New Members!
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
              Join HobbyHub today and get <span className="text-pink-600 font-semibold">exclusive early access</span> to
              premium hobby groups, virtual workshops, and monthly community events. Limited-time deal – don’t miss it!
            </p>

            <Link to="/signup">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-full transition">
                Claim Your Offer
              </button>
            </Link>
          </div>
        </Fade>

        {/* Image or Animation Section */}
        <Slide direction="right" triggerOnce>
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co/fqYBYvq/offer-hobbies.png"
              alt="Special Offer"
              className="w-full max-w-sm md:max-w-md rounded-xl shadow-lg"
            />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default OfferSection;
