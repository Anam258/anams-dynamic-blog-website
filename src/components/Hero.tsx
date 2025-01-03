"use client";

import Image from "next/image";
import Slider from "react-slick";
import banner1 from "@/images/banner1.jpg";
import banner2 from "@/images/banner2.jpg";
import banner3 from "@/images/banner3.jpg";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const slides = [
    {
      image: banner1,
      title: "Embrace Nature",
      subtitle: "Cultivate a Greener World Through Gardening",
    },
    {
      image: banner2,
      title: "Capture Moments",
      subtitle: "Photography tips and tricks",
    },
    {
      image: banner3,
      title: "Inspiring Stories",
      subtitle: "Travel tales from across the globe",
    },
  ];

  return (
    <div className="w-full max-h-screen relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-[90vh]">
            <Image
              src={slide.image}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-gray-100">
              <h2 className="text-4xl lg:text-7xl font-bold">{slide.title}</h2>
              <p className="text-lg md:text-2xl lg:text-4xl font-semibold">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
