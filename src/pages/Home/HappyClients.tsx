"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Img } from "react-image";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const HappyClients = () => {
  const clients = [
    {
      name: "John Doe",
      reviewText:
        "Absolutely loved the service! Highly recommend it to everyone.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 4.5,
    },
    {
      name: "Jane Smith",
      reviewText:
        "A fantastic experience from start to finish. Will come back again!",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 5,
    },
    {
      name: "Michael Brown",
      reviewText:
        "Great quality and amazing customer support. 10/10 experience!",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 4,
    }
  ];

  const getStars = (rating:number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i - 0.5 === rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="container font-orbitron mx-auto py-12 mt-12 mb-8">
      <h2 className="text-2xl mb-2 font-bold flex items-center justify-center">
        Our Happiest <span className="text-red-400 pl-2">Clients</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {clients.map((client, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[24rem] h-auto rounded-xl border p-4 ">
              {/* Client Image */}
              <CardItem
                translateZ="100"
                className="w-full mt-4 flex justify-center"
              >
                <Img
                  src={client.image}
                  height="1000"
                  width="1000"
                  className="h-20 w-20 object-cover rounded-full mx-auto group-hover/card:shadow-xl"
                  alt={client.name}
                />
              </CardItem>

              {/* Name & Rating in Center */}
              <div className="flex flex-col items-center justify-center mt-4">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {client.name}
                </CardItem>
                <div className="flex">{getStars(client.rating)}</div>
              </div>

              {/* Review Text */}
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 font-serif text-sm max-w-sm mt-2 dark:text-neutral-300 text-center"
              >
                {client.reviewText}
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default HappyClients;
