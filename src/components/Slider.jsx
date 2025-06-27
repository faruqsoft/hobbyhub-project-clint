import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Typewriter } from "react-simple-typewriter";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        interval={2000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        stopOnHover={true}
        emulateTouch={true}
        showArrows={true}
        transitionTime={1000}
      >
        {/* Slide 1 */}
        <div className="relative">
          <img
            src="https://i.ibb.co/N2D3BHZ9/drop-1004250-1280.jpg"
            alt="Hiking Group"
            className="h-[300px] md:h-[450px] w-full object-cover"
          />
          <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="text-red-500">
                <Typewriter
                  words={['Welcome to HobbyHub']}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h2>
            <p className="mt-2 text-sm md:text-lg max-w-2xl">
              Discover and join exciting hobby groups near you — connect with like-minded people and explore your passions!
            </p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img
            src="https://i.ibb.co/Y4kt2hZc/virtual-reality-8733430-1280.jpg"
            alt="Virtual Hobby"
            className="h-[300px] md:h-[450px] w-full object-cover"
          />
          <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="text-red-500">
                <Typewriter
                  words={['Virtual Hobby Meetups']}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h2>
            <p className="mt-2 text-sm md:text-lg max-w-2xl">
              Can’t meet in person? HobbyHub helps you connect virtually and share your interests from anywhere!
            </p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative">
          <img
            src="https://i.ibb.co/wZqScdbV/man-2604149-1280.jpg"
            alt="Painting"
            className="h-[300px] md:h-[450px] w-full object-cover"
          />
          <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="text-red-500">
                <Typewriter
                  words={['Create Your Own Group']}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h2>
            <p className="mt-2 text-sm md:text-lg max-w-2xl">
              Start a group for your favorite hobby and invite others to join — build your own creative community!
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
