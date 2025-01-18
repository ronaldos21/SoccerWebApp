import React from "react";
import Menu from "./Menu"; // Import the Menu component


const App = () => {
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
          A modern solution for all your needs. Discover amazing features and more.
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
        <div className="container mx-auto text-center px-200">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg transition-all transform hover:scale-105 m-4" style={{ width: '130%' }}>
              <a href="#">
                <img class="p-8 rounded-t-lg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/1200px-Soccerball.svg.png" alt="product image" />
              </a>
              <h3 className="text-2xl font-semibold text-gray-800">Feature 1</h3>
              <p className="mt-4 text-gray-600">
                This is a brief description of Feature 1. It helps with improving productivity.
              </p>
            </div>
        
            <div className="bg-white p-8 rounded-lg shadow-lg transition-all transform hover:scale-105 m-4" style={{ width: '130%' }}>
              <a href="#">
                <img class="p-8 rounded-t-lg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/1200px-Soccerball.svg.png" alt="product image" />
              </a>
              <h3 className="text-2xl font-semibold text-gray-800">Feature 3</h3>
              <p className="mt-4 text-gray-600">
                This is a brief description of Feature 3. It provides insights into your processes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transition-all transform hover:scale-105 m-4" style={{ width: '130%' }}>
              <a href="#">
                <img class="p-8 rounded-t-lg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/1200px-Soccerball.svg.png" alt="product image" />
              </a>
              <h3 className="text-2xl font-semibold text-gray-800">Feature 2</h3>
              <p className="mt-4 text-gray-600">
                This is a brief description of Feature 2. It streamlines your workflow.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transition-all transform hover:scale-105 m-4" style={{ width: '130%'}}>
              <a href="#">
                <img class="p-8 rounded-t-lg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/1200px-Soccerball.svg.png" alt="product image" />
              </a>
              <h3 className="text-2xl font-semibold text-gray-800">Feature 2</h3>
              <p className="mt-4 text-gray-600">
                This is a brief description of Feature 2. It streamlines your workflow.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transition-all transform hover:scale-105 m-4" style={{ width: '130%' }}>
              <a href="#">
                <img class="p-8 rounded-t-lg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/1200px-Soccerball.svg.png" alt="product image" />
              </a>
              <h3 className="text-2xl font-semibold text-gray-800">Feature 2</h3>
              <p className="mt-4 text-gray-600">
                This is a brief description of Feature 2. It streamlines your workflow.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transition-all transform hover:scale-105 m-4" style={{ width: '130%' }}>
              <a href="#">
                <img class="p-8 rounded-t-lg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/1200px-Soccerball.svg.png" alt="product image" />
              </a>
              <h3 className="text-2xl font-semibold text-gray-800">Feature 2</h3>
              <p className="mt-4 text-gray-600">
                This is a brief description of Feature 2. It streamlines your workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-100 py-20">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">What Our Clients Say</h2>
          <div className="flex flex-wrap justify-center space-x-6">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs">
              <p className="text-lg text-gray-600">
                "This app has completely transformed the way we work. Highly recommend it!"
              </p>
              <div className="mt-4 font-semibold text-gray-700">John Doe</div>
              <div className="text-gray-500">CEO, Example Corp</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs">
              <p className="text-lg text-gray-600">
                "A game-changer for our business. The interface is intuitive and easy to use."
              </p>
              <div className="mt-4 font-semibold text-gray-700">Jane Smith</div>
              <div className="text-gray-500">Product Manager, TechSolutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center py-20">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-6">Start your journey with us today and experience innovation like never before.</p>
        <a
          href="#contact"
          className="inline-block bg-yellow-500 text-gray-800 py-3 px-6 rounded-full text-lg transition transform hover:scale-105 hover:bg-yellow-400"
        >
          Contact Us
        </a>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>© 2025 MyApp. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
