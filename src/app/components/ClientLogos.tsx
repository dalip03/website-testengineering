'use client';

import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  "/clientsImg/amazon-logo.png",
  "/clientsImg/Adani-logo.png",
  "/clientsImg/dlf-logo.png",
  "/clientsImg/jsw-logo.png",
  "/clientsImg/nextra-logo.png",
  "/clientsImg/st-logo.png",
  "/clientsImg/tata-logo.png",
  "/clientsImg/uhtv-logo.jpg",
  "/clientsImg/lt-logo.jpg",
];

export default function ClientLogos() {
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section className="bg-white py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Our Clients</h2>
        <p className="text-gray-600">Partnering with Industry Leaders</p>
      </div>
      <div className="px-4">
        <Slider {...settings}>
          {logos.map((logo, idx) => (
            <motion.div
              key={idx}
              className="px-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative w-30 h-16">
                <Image
                  src={logo}
                  alt={`Client Logo ${idx}`}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
