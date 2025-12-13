import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const WinnerAdvertisement = () => {
  const [winners, setWinners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/Winners.json")
      .then((res) => res.json())
      .then((data) => {
        setWinners(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load Winners data", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-10">Loading winners...</p>;
  if (!winners.length) return <p className="text-center py-10">No winners yet.</p>;

  return (
    <section className="bg-blue-100 py-16">
      {/* Top heading */}
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
        🎉 Winners Advertisement
      </h2>

      <div className="container mx-auto max-w-6xl px-5 flex flex-col lg:flex-row gap-12 items-center">
        
        {/* Left side: Background image with overlay text */}
        <div
          className="lg:w-1/2 relative rounded-2xl h-96 flex items-center justify-center text-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581091870621-7b79d6d6a1f5?crop=entropy&cs=tinysrgb&fit=max&h=600&w=800')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-purple-100 bg-opacity-40 rounded-2xl"></div>
          <div className="relative z-10 text-orange-500 px-5">
            <h2 className="text-4xl font-bold mb-4">🎉 Be the Next Winner!</h2>
            <p className="text-lg">
              Join our contests, showcase your skills, and be inspired by our champions.
              Every contest is an opportunity to learn, compete, and win amazing prizes!
            </p>
          </div>
        </div>

        {/* Right side: Winner carousel */}
        <div className="lg:w-1/2">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
          >
            {winners.map((winner, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
                  <img
                    src={winner.photo}
                    alt={winner.name}
                    className="w-24 h-24 rounded-full mb-4 shadow-md"
                  />
                  <h3 className="text-xl font-semibold">{winner.name}</h3>
                  <p className="text-gray-500">{winner.contest}</p>
                  <p className="text-orange-500 font-bold text-lg mt-2">{winner.prize}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default WinnerAdvertisement;   