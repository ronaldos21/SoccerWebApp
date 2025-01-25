import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
    return (
        <div
            className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full cursor-pointer hover:bg-gray-700 z-10 shadow-lg"
            onClick={onClick}
        >
            &rarr;
        </div>
    );
};

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => {
    return (
        <div
            className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full cursor-pointer hover:bg-gray-700 z-10 shadow-lg"
            onClick={onClick}
        >
            &larr;
        </div>
    );
};

const FeaturesSection = () => {
    const features = [
        {
            title: "Multiple Categories",
            description: "Choose from a variety of categories like World Cup, Player Stats, and more!",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/1200px-Soccerball.svg.png",
        },
        {
            title: "Leaderboard",
            description: "Compete with friends and see who tops the leaderboard!",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/1200px-Soccerball.svg.png",
        },
        {
            title: "Responsive Design",
            description: "Enjoy a seamless experience on any device, anywhere.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/1200px-Soccerball.svg.png",
        },
        {
            title: "Interactive Quizzes",
            description: "Experience engaging and interactive quizzes to test your knowledge.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/1200px-Soccerball.svg.png",
        },
        {
            title: "Track Progress",
            description: "Monitor your performance and improve over time with detailed stats.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/1200px-Soccerball.svg.png",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section id="features" className="py-20 bg-gray-50">
            <div className="container mx-auto text-center px-6 relative">
                <h2 className="text-4xl font-bold mb-12 text-gray-800">Quiz Features</h2>
                <Slider {...settings}>
                    {features.map((feature, index) => (
                        <div key={index} className="p-4">
                            <div className="bg-white p-8 rounded-lg shadow-lg transition-all transform hover:scale-105">
                                <img
                                    className="w-24 h-24 mx-auto mb-4"
                                    src={feature.image}
                                    alt={feature.title}
                                />
                                <h3 className="text-2xl font-semibold text-gray-800">{feature.title}</h3>
                                <p className="mt-4 text-gray-600">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default FeaturesSection;
