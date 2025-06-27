import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { Fade, Zoom } from "react-awesome-reveal";

const events = [
  {
    id: 1,
    title: "Summer HobbyFest 2025",
    date: "2025-07-10",
    time: "10:00 AM - 5:00 PM",
    location: "Community Center, City Park",
    description:
      "Join workshops, challenges, and meet hobby enthusiasts from all around!",
  },
  {
    id: 2,
    title: "Virtual Painting Workshop",
    date: "2025-07-25",
    time: "2:00 PM - 4:00 PM",
    location: "Online",
    description:
      "Learn painting techniques from expert artists from the comfort of your home.",
  },
  {
    id: 3,
    title: "Hiking Group Meetup",
    date: "2025-08-05",
    time: "7:00 AM - 1:00 PM",
    location: "Mountain Trail Entrance",
    description:
      "Explore nature with fellow hikers and enjoy a fun day outdoors.",
  },
  {
    id: 4,
    title: "Monthly Board Game Night",
    date: "2025-08-15",
    time: "6:00 PM - 11:00 PM",
    location: "Downtown Game Cafe",
    description:
      "Challenge your friends or make new ones while playing exciting board games.",
  },
];

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <Fade direction="down" triggerOnce>
          <h2 className="text-4xl font-extrabold text-indigo-700 dark:text-white mb-6">
            📅 Upcoming HobbyHub Events
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-12 max-w-xl mx-auto">
            Discover events designed to help you connect, learn, and have fun with your hobbies.
          </p>
        </Fade>

        <Zoom cascade damping={0.1} triggerOnce>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 text-left hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-bold text-indigo-700 dark:text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>

                <div className="flex flex-wrap gap-4 text-gray-700 dark:text-gray-400 text-sm font-semibold">
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt /> {new Date(event.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaClock /> {event.time}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaMapMarkerAlt /> {event.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default EventsPage;
