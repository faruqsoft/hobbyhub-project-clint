import React from "react";
import { FaUsers, FaPaintBrush } from "react-icons/fa";
import { MdGroupAdd, MdDevices, MdSecurity, MdAccessTime } from "react-icons/md";
import { Fade, Zoom } from "react-awesome-reveal";

const features = [
  {
    icon: <FaUsers className="text-3xl text-purple-600" />,
    title: "Meet Like-Minded People",
    description: "Connect with hobbyists in your area who share your passions.",
  },
  {
    icon: <MdGroupAdd className="text-3xl text-blue-500" />,
    title: "Easy Group Creation",
    description: "Start your own group in minutes and grow a vibrant community.",
  },
  {
    icon: <FaPaintBrush className="text-3xl text-pink-500" />,
    title: "Diverse Hobbies",
    description: "From hiking to painting, explore a wide variety of hobby groups.",
  },
  {
    icon: <MdDevices className="text-3xl text-green-500" />,
    title: "Virtual & In-Person",
    description: "Join or host meetups either online or locally — your choice.",
  },
  {
    icon: <MdAccessTime className="text-3xl text-indigo-500" />,
    title: "Fast Delivery",
    description: "Lightning-fast shipping to keep you updated monthly.",
  },
  {
    icon: <MdSecurity className="text-3xl text-red-500" />,
    title: "Safe & Secure",
    description: "Your data is protected and your group access is well-managed.",
  },
];

const WhyChoose = () => {
  return (
    <div className="mt-12 px-6">
      <Fade direction="down" triggerOnce>
        <h2 className="text-3xl font-bold text-center mb-2">Why Choose HobbyHub?</h2>
        <p className="text-xl font-bold text-center mb-8 ">
          Discover how HobbyHub helps you connect, create, and grow your hobbies
        </p>
      </Fade>

      <Zoom cascade damping={0.1} triggerOnce>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition"
            >
              <div className="mb-3 flex justify-center">{feature.icon}</div>
              <h3 className="text-2xl  text-gray-600 font-semibold mb-1">{feature.title}</h3>
              <p className="text-gray-600 text-xl">{feature.description}</p>
            </div>
          ))}
        </div>
      </Zoom>
    </div>
  );
};

export default WhyChoose;
