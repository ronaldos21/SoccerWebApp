import React, { useState, useRef } from "react";
import Slider from "react-slick"; // Import react-slick for the slideshow
import "slick-carousel/slick/slick.css"; // Import slick styles
import "slick-carousel/slick/slick-theme.css";
import Menu from "./Menu"; // Import the Menu component

const App = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State to track search input
  const sliderRef = useRef(null); // Create a ref for the slider instance

  const features = [
    {
      title: "Feature 1",
      description:
        "This is a brief description of Feature 1. It helps with improving productivity.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/1200px-Soccerball.svg.png",
    },
    {
      title: "Feature 2",
      description:
        "This is a brief description of Feature 2. It streamlines your workflow.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/1200px-Soccerball.svg.png",
    },
    {
      title: "Feature 3",
      description:
        "This is a brief description of Feature 3. It provides insights into your processes.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/1200px-Soccerball.svg.png",
    },
    {
      title: "Feature 4",
      description:
        "This is a brief description of Feature 4. It enhances collaboration across teams.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/1200px-Soccerball.svg.png",
    },
    {
      title: "Feature 5",
      description:
        "This is a brief description of Feature 5. It ensures data security.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/1200px-Soccerball.svg.png",
    },
    {
      title: "Feature 6",
      description:
        "This is a brief description of Feature 6. It provides advanced analytics.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/1200px-Soccerball.svg.png",
    },
  ];

  // Filter the features array based on searchTerm
  const filteredFeatures = features.filter((feature) =>
    feature.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Remove duplicates after filtering (if necessary)
  const uniqueFilteredFeatures = [
    ...new Set(filteredFeatures.map((a) => a.title)),
  ].map((title) => filteredFeatures.find((a) => a.title === title));

  // Dynamically adjust slidesToShow based on the number of filtered features
  const slidesToShow = Math.min(uniqueFilteredFeatures.length, 3);

  // Slider settings
  const settings = {
    dots: true,
    infinite: slidesToShow > 1, // Infinite scroll only if more than one slide
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(uniqueFilteredFeatures.length, 2),
          slidesToScroll: Math.min(uniqueFilteredFeatures.length, 2),
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: Math.min(uniqueFilteredFeatures.length, 1),
          slidesToScroll: Math.min(uniqueFilteredFeatures.length, 1),
        },
      },
    ],
  };

  // Custom slider navigation functions
  const goToPreviousSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="font-sans antialiased">
      {/* Menu */}
      <Menu />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white text-center py-40">
        <h1 className="text-5xl font-extrabold leading-tight mb-4">
          Welcome to MyApp!
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          A modern solution for all your needs. Discover amazing features and
          more.
        </p>
        <a
          href="#services"
          className="inline-block bg-yellow-500 text-gray-800 py-3 px-6 rounded-full text-lg transition transform hover:scale-105 hover:bg-yellow-400"
        >
          Explore Our Services
        </a>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-4xl font-bold mb-12 text-gray-800">Teams</h3>
          <form className="max-w-md mx-auto">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search Teams...."
                required
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // Update the search term
              />
            </div>
          </form>
          <br />
          <div className="relative">
            <Slider {...settings} ref={sliderRef}>
              {uniqueFilteredFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center p-4"
                >
                  <div
                    className="bg-white p-8 rounded-lg shadow-lg transition-all transform hover:scale-105 mx-auto"
                    style={{ width: "300px", height: "400px" }}
                  >
                    <a href="#">
                      <img
                        className="p-8 rounded-t-lg mx-auto"
                        src={feature.image}
                        alt={`Image for ${feature.title}`}
                        style={{
                          maxHeight: "150px",
                          objectFit: "contain",
                        }}
                      />
                    </a>
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </Slider>

            {/* Custom Slider Navigation Buttons */}
            <button
              onClick={goToPreviousSlide}
              className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-gray-600 to-gray-900 text-white p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
              aria-label="Previous Slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={goToNextSlide}
              className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-gray-600 to-gray-900 text-white p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
              aria-label="Next Slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>© 2025 MyApp. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
