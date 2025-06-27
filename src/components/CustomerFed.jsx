import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const feedbacks = [
  {
    name: "Ayesha Rahman",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    feedback: "HobbyHub helped me find a painting group nearby — now I paint with friends every weekend!",
  },
  {
    name: "Tanvir Alam",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 4,
    feedback: "Great platform to explore hobbies and meet like-minded people in my city.",
  },
  {
    name: "Sadia Ahmed",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5,
    feedback: "Creating my own book club was so easy — and we’ve grown so fast!",
  },
  {
    name: "Zahin Khan",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    rating: 5,
    feedback: "HobbyHub’s virtual meet options are a game-changer for busy people like me.",
  },
  {
    name: "Nadia Islam",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    rating: 5,
    feedback: "Perfect place to try something new without pressure — I joined a hiking group and love it!",
  },
  {
    name: "Hasibul Hasan",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    rating: 4,
    feedback: "User-friendly and welcoming — highly recommended for anyone with a hobby!",
  },
];

//  Helper function to render star icons
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<FaStar key={i} className="text-yellow-400 inline" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-gray-300 inline" />);
    }
  }

  return stars;
};

const CustomerFed = () => {
  return (
    <div className="mt-12 px-4 py-10 bg-gray-100 rounded-lg">
      <Fade direction="down" triggerOnce>
        <h2 className="text-3xl font-bold mb-3 text-center text-gray-800">What Our Members Say</h2>
        <p className="text-center text-xl text-gray-600 mb-10">
          Hear from real HobbyHub users about their experiences connecting through hobbies
        </p>
      </Fade>

      <Zoom cascade damping={0.1} triggerOnce>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {feedbacks.map((feedback, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition duration-300 text-center"
            >
              <img
                src={feedback.image}
                alt={feedback.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-primary"
              />
              <h3 className="text-lg font-semibold text-gray-800">{feedback.name}</h3>
              <div className="flex justify-center items-center gap-1 mb-2 mt-1">
                {renderStars(feedback.rating)}
              </div>
              <p className="text-md text-gray-600">{feedback.feedback}</p>
            </div>
          ))}
        </div>
      </Zoom>
    </div>
  );
};

export default CustomerFed;
