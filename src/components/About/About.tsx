const About = () => {
  return (
    <div className="mt-20 px-6 font-orbitron mb-8 text-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-primary-text">About Us</h1>
          <p className="text-lg text-primary-text">
            We are committed to providing top-quality footwear for every
            occasion. Our collection brings together both comfort and style to
            help you walk through life with confidence.
          </p>
          <button className="bg-secondary text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary-bg transition">
            Discover Our Collection
          </button>
        </div>

        {/* Right Section with Image */}
        <div className="relative w-full">
          <img
            src="https://res.cloudinary.com/dzhou2pgk/image/upload/v1740090362/shoes.jpg"
            alt="Shoes"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
          <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>
          <div className="absolute bottom-4 left-6 text-white space-y-3">
            <h2 className="text-2xl font-semibold">The Perfect Pair</h2>
            <p className="text-lg">Comfort, style, and elegance combined.</p>
            <button className="bg-primary-bg text-white px-6 py-2 rounded-lg text-md font-medium hover:bg-secondary transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20 text-center">
        <p className="font-black text-secondary text-lg">Our Commitment</p>
        <h2 className="text-3xl md:text-5xl font-bold text-primary-text">
          Quality and Comfort
        </h2>
        <p className="mt-4 text-base text-primary-text">
          Every pair of shoes we make is designed to provide the best
          experience. We work hard to ensure every step you take is a
          comfortable one.
        </p>
      </div>

      {/* Contact Section */}
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="bg-blue-200 p-6 rounded-xl text-black shadow-lg">
          <h3 className="text-xl font-semibold">Chat with us</h3>
          <p>Get in touch with our customer support team.</p>
          <button className="bg-secondary text-primary-bg px-6 py-2 rounded-lg mt-4 text-md font-medium hover:bg-primary-bg transition">
            Contact Support
          </button>
        </div>

        <div className="bg-orange-500 p-6 rounded-xl text-black shadow-lg">
          <h3 className="text-xl font-semibold">Store Locations</h3>
          <p>Find a store near you and try our shoes on!</p>
          <button className="bg-secondary text-primary-bg px-6 py-2 rounded-lg mt-4 text-md font-medium hover:bg-primary-bg transition">
            Find a Store
          </button>
        </div>

        <div className="bg-yellow-200 p-6 rounded-xl text-black shadow-lg">
          <h3 className="text-xl font-semibold">Join Our Newsletter</h3>
          <p>Stay up-to-date with the latest trends and offers.</p>
          <button className="bg-secondary text-primary-bg px-6 py-2 rounded-lg mt-4 text-md font-medium hover:bg-primary-bg transition">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

