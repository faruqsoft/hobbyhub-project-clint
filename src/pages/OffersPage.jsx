import React from "react";
import { FaGift, FaUsers, FaStar, FaCalendarCheck } from "react-icons/fa";
import { Fade, Zoom } from "react-awesome-reveal";

const offers = [
  {
    title: "🎁 Welcome Bonus",
    icon: <FaGift className="text-3xl text-indigo-600" />,
    description: "Get instant access to premium groups as a welcome gift.",
  },
  {
    title: "⭐ Featured Group Access",
    icon: <FaStar className="text-3xl text-yellow-500" />,
    description: "Join our most popular hobby groups without waiting in line.",
  },
  {
    title: "👥 Double Group Join",
    icon: <FaUsers className="text-3xl text-green-500" />,
    description: "Join 2 new hobby groups for free in your first week!",
  },
  {
    title: "📅 Early Event Access",
    icon: <FaCalendarCheck className="text-3xl text-pink-500" />,
    description: "RSVP early for all virtual and in-person events.",
  },
];

const OffersPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-700 dark:to-gray-600 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <Fade direction="down" triggerOnce>
          <h2 className="text-4xl font-extrabold text-indigo-700 dark:text-white mb-4">
            🏷️ Your Exclusive Offers
          </h2>
          <p className="text-gray-100 dark:text-gray-100 text-lg mb-10 max-w-xl mx-auto">
            Here are all the amazing benefits waiting for you as a new member of HobbyHub.
          </p>
        </Fade>

        <Zoom cascade damping={0.1} triggerOnce>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {offers.map((offer, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-left"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div>{offer.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{offer.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{offer.description}</p>
              </div>
            ))}
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default OffersPage;
