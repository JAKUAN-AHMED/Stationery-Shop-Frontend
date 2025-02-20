import { CheckCircle, DollarSign, Truck, Headphones } from "lucide-react";

const commitments = [
  {
    id: 1,
    icon: <CheckCircle className="text-green-500 w-10 h-10" />,
    title: "Top-Quality Products",
    description:
      "We ensure premium quality stationery for students & professionals.",
  },
  {
    id: 2,
    icon: <DollarSign className="text-blue-500 w-10 h-10" />,
    title: "Affordable Prices",
    description:
      "Get the best products at unbeatable prices for all your needs.",
  },
  {
    id: 3,
    icon: <Truck className="text-orange-500 w-10 h-10" />,
    title: "Fast & Secure Delivery",
    description: "Quick and safe delivery to your doorstep, hassle-free!",
  },
  {
    id: 4,
    icon: <Headphones className="text-purple-500 w-10 h-10" />,
    title: "24/7 Customer Support",
    description: "We’re here to help you anytime with any queries.",
  },
];

const Commitment = () => {
  return (
    <section className="py-12 bg-gray-100 text-gray-900 font-orbitron">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Our Commitment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {commitments.map(({ id, icon, title, description }) => (
            <div
              key={id}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
            >
              {icon}
              <h3 className="text-base font-semibold mt-4">{title}</h3>
              <p className="text-gray-600 font-serif text-sm mt-2">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commitment;
