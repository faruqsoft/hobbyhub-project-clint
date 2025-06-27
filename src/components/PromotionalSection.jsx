import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const PromotionalSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16 px-6 rounded-lg max-w-7xl mx-auto my-12 shadow-lg">
      <Fade triggerOnce>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-4 drop-shadow-lg">
            🚀 Boost Your Hobby Experience!
          </h2>
          <p className="text-lg mb-8 drop-shadow-md">
            Join our upcoming <span className="font-semibold underline decoration-pink-300">Summer HobbyFest</span> — exclusive workshops, community challenges, and prizes await! Don’t miss out on this limited-time opportunity.
          </p>

          <Link to="/events" className="inline-block bg-pink-500 hover:bg-pink-600 transition text-white font-semibold px-8 py-3 rounded-full shadow-lg">
            Explore Events
            </Link>

        </div>
      </Fade>
    </section>
  );
};

export default PromotionalSection;
