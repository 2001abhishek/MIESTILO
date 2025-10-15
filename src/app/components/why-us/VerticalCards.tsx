'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Card {
  id: number;
  badge: string;
  title: string;
  description: string;
  image: string;
}

const cards: Card[] = [
  {
    id: 1,
    badge: 'Ijaro Group',
    title: 'Indian Dealership Network',
    description: 'Ijaro Group has an extensive dealership network across India, ensuring that our products and services reach every corner of the country with efficiency and reliability.',
    image: 'https://www.ijarogroup.com/public/imgs/why/why18.jpg'
  },
  {
    id: 2,
    badge: 'Ijaro Group',
    title: 'Eco-Friendly Practices',
    description: 'We are committed to sustainable and eco-friendly practices in all our operations, reducing environmental impact while delivering exceptional quality and service to our customers.',
    image: 'https://www.ijarogroup.com/public/imgs/why/why19.jpg'
  },
  {
    id: 3,
    badge: 'Ijaro Group',
    title: 'Unmatched Production Capacity',
    description: 'Our strong in-house manufacturing network enables us to efficiently manage projects of any scale. This ensures faster turnaround times and a dependable supply chain, giving foreign importers confidence that their orders will be fulfilled promptly and accurately.',
    image: 'https://www.ijarogroup.com/public/imgs/why/why3.jpg'
  },
  {
    id: 4,
    badge: 'Ijaro Group',
    title: 'Endless Product Variety',
    description: 'Our commitment to innovation and diversity means we continually expand our product lines to include the latest trends and technologies. This endless variety ensures that you always have access to new and unique products, keeping you competitive in your market.',
    image: 'https://www.ijarogroup.com/public/imgs/why/why6.jpg'
  },
  {
    id: 5,
    badge: 'Ijaro Group',
    title: 'Custom Packaging',
    description: 'Our custom pallet packaging is designed for all sizes and made from high-quality wood, providing a stronger base and stable platform for easier stacking and space-saving in your warehouse. Each pallet is wrapped in waterproof and dustproof plastic sheets to protect against damage. We also offer branding options on the packaging, with each pallet featuring a unique card detailing the materials inside.',
    image: 'https://www.ijarogroup.com/public/imgs/why/why9.jpg'
  },
  {
    id: 7,
    badge: 'Ijaro Group',
    title: 'Quality Assurance',
    description: 'We prioritize quality at every stage of production. Our stringent quality checks before, during, and after manufacturing ensure that our products meet international standards. A dedicated, highly-trained team oversees quality at every critical stage, from production to packaging. We provide detailed quality check reports with photos for each order and conduct random checks on all packages to ensure every quality parameter is met. As an ISO 9001:2015 certified company, our commitment to superior quality guarantees you consistently excellent products.',
    image: 'https://www.ijarogroup.com/public/imgs/why/why1.jpg'
  },
  {
    id: 8,
    badge: 'Ijaro Group',
    title: 'Unparalleled Selection',
    description: 'At Ijaro Group, we offer a wide range of ceramic tiles, sanitary wares, rubber mats, and wall clocks. Our extensive collection of styles, colors, and finishes ensures that you will find exactly what you need to meet the unique tastes and preferences of your market. Our diverse selection guarantees that we can cater to the specific demands of international customers.',
    image: 'https://www.ijarogroup.com/public/imgs/why/why2.jpg'
  },
  {
    id: 9,
    badge: 'Ijaro Group',
    title: 'Top Quality Products at Affordable Rates',
    description: 'At Ijaro Group, we believe that high-quality products should be accessible to all. By leveraging efficient production techniques and economies of scale, we offer our top-quality products at highly competitive prices. This ensures that our clients receive the best value for their investment without compromising on quality.',
    image: 'https://www.ijarogroup.com/public/imgs/why/why4.jpg'
  },
  {
    id: 10,
    badge: 'Ijaro Group',
    title: 'Long-Term Business Vision',
    description: 'We are committed to building long-term partnerships with our clients. Our business philosophy focuses on mutual growth and success. By understanding your needs and consistently delivering excellent products and services, we aim to be your trusted partner for many years to come.',
    image: 'https://www.ijarogroup.com/public/imgs/why/why5.jpg'
  },
  {
    id: 11,
    badge: 'Ijaro Group',
    title: 'Explore Before You Buy',
    description: 'We offer free samples so you can experience the quality and aesthetics of our products firsthand before making a decision. This transparency builds trust and assures you of our product quality.',
    image: 'https://www.ijarogroup.com/public/imgs/why/why7.jpg'
  },
  {
    id: 12,
    badge: 'Ijaro Group',
    title: 'Confidence Through Transparency',
    description: 'We invite you to visit our manufacturing facilities to see our operations and quality commitment firsthand. This transparency underscores our dedication to maintaining the highest standards and building long-term relationships with our clients.',
    image: 'https://www.ijarogroup.com/public/imgs/why/why8.jpg'
  },
  {
    id: 13,
    badge: 'Ijaro Group',
    title: 'Quick Delivery',
    description: 'We meticulously plan each stage of our deliveries to prevent any delays. Our packages are shipped on the earliest available vessels, with customs documents organized per each country’s guidelines to ensure smooth transitions. Consignments are shipped with letters of credit, facilitating quick processing of documents from the shipper’s bank to the consignee’s bank according to Incoterms 2000. We guarantee on-time delivery, ensuring your project stays on track.',
    image: 'https://www.ijarogroup.com/public/imgs/why/why10.jpg'
  },
];

const VerticalCards = () => {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top;
      const containerHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const cardTop = card.getBoundingClientRect().top;
        const cardMiddle = cardTop + card.offsetHeight / 2;
        const viewportMiddle = viewportHeight / 2;

        if (Math.abs(cardMiddle - viewportMiddle) < 200) {
          setActiveCard(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white py-16 md:py-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-16 md:mb-24 max-w-4xl">
          Discover the Key Reasons Why Our Business Solutions Are Your Best Choice
        </h2>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Side - Sticky Images */}
          <div className="relative h-[400px] lg:h-[600px] lg:sticky lg:top-24">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`absolute inset-0 transition-opacity duration-500 ${activeCard === index ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Scrolling Cards */}
          <div className="space-y-32 lg:space-y-48">
            {cards.map((card, index) => (
              <div
                key={card.id}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className={`transition-all duration-500 ${activeCard === index ? 'opacity-100' : 'opacity-40'
                  }`}
              >
                <div className="space-y-6">
                  {/* Badge */}
                  <div className="inline-block">
                    <span className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-semibold text-gray-900">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="flex justify-end mt-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerticalCards;
