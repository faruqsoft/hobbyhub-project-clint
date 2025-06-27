import React from "react";
import { Fade} from "react-awesome-reveal";
import { Typewriter } from 'react-simple-typewriter';


const faqs = [
  {
    question: "What is HobbyHub?",
    answer:
      "HobbyHub is a platform that connects people through shared hobbies. You can discover, join, or create local and virtual groups based on your interests.",
  },
  {
    question: "How do I join a group?",
    answer:
      "Browse the available groups and click 'Join Group' on any that interests you. You’ll be added immediately if the group hasn’t started yet.",
  },
  {
    question: "Can I create my own hobby group?",
    answer:
      "Yes! Just log in and click on 'Create Group'. Fill in the details like group name, category, image, and start date to launch your own group.",
  },
  {
    question: "Is it free to use HobbyHub?",
    answer:
      "Absolutely. HobbyHub is completely free for users to explore, join, and create groups based on hobbies they love.",
  },
  {
    question: "What happens after the group start date?",
    answer:
      "Once a group’s start date passes, it will be locked for new members to keep the experience focused and organized.",
  },
  {
    question: "Can I manage or delete a group I created?",
    answer:
      "Yes, from your 'My Groups' dashboard, you can view, update, or delete any group you've created.",
  },
];

const FAQ = () => {
  return (
    <div className="px-6 py-12 bg-gray-50 rounded-lg mt-12">
    
      

<h2 className="text-3xl font-bold text-center mb-8 text-red-400">
  <Typewriter
    words={[
      'Frequently Asked Questions',
      'Still Curious?',
      'Let Us Help You!',
    ]}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1500}
  />
</h2>

      <p className="text-center text-2xl text-gray-400 mb-10">
        Everything you need to know about joining or creating groups on HobbyHub.
      </p>
     

      <div className="max-w-4xl mx-auto space-y-6">
      <Fade direction="up" triggerOnce>
          {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">{faq.question}</h3>
            <p className="text-gray-700 text-lg">{faq.answer}</p>
          </div>
        ))}
      </Fade>
      </div>
    </div>
  );
};

export default FAQ;
