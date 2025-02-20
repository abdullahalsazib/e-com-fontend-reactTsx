import React, { useState } from "react";

const Carousel: React.FC = () => {
  // State to track the current slide
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Array of images for the carousel
  const slides = [
    {
      image:
        "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Welcome to the Dashboard",
    },
    {
      image:
        "https://images.pexels.com/photos/2885320/pexels-photo-2885320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Manage Your Analytics",
    },
    {
      image:
        "https://images.pexels.com/photos/3374210/pexels-photo-3374210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Track Your Products",
    },
  ];

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full mt-8">
      <div className="relative">
        {/* Check if the image URL is correct */}

        <img
          src={slides[currentSlide].image}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-[500px] object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-opacity-40 rounded-lg">
          <h2>{slides[currentSlide].caption}</h2>
        </div>
      </div>

      {/* Custom Navigation */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl bg-black py-2 rounded-full opacity-50 hover:opacity-100 transition duration-300"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl bg-black py-2 rounded-full opacity-50 hover:opacity-100 transition duration-300"
      >
        &#8594;
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full bg-white ${
              currentSlide === index ? "bg-opacity-70" : "bg-opacity-30"
            } transition duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
