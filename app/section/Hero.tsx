"use client"

import React, { useRef } from 'react'
import MaxWidthWrapper from '../../components/mmw'
import { motion, useScroll, useTransform } from 'framer-motion';
import Welcome from '../../components/Welcome';

interface CardType {
  url: string;
  title: string;
  id: number;
}

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section id='hero' className='text-gray-300 text-center h-full'>
      <MaxWidthWrapper>
        <div>
          <div className='py-20'>
          <Welcome />
          </div>
          <p className='px-10 text-2xl'> Welcome to The ISA HIT Student's Chapter.<br /> Where connects students with industry experts through workshops and events,<br />
            fostering skills in automation and control for successful engineering careers.</p>
        </div>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-0">
            {cards.map((card) => (
              <Card card={card} key={card.id} />
            ))}
          </motion.div>

        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Hero;

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[350px] w-[350px] overflow-hidden"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      {/* <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div> */}

    </div>
  );
};

const cards: CardType[] = [
  {
    url: "/img/img2.jpg",
    title: "Event 1",
    id: 1,
  },
  {
    url: "/img/img1.jpg",
    title: "Event 2",
    id: 2,
  },
  {
    url: "/img/img3.jpg",
    title: "Event 3",
    id: 3,
  },
  {
    url: "/img/img4.jpg",
    title: "Event 4",
    id: 4,
  },
  {
    url: "/img/img5.jpg",
    title: "Event 5",
    id: 5,
  },
  {
    url: "/img/img6.jpg",
    title: "Event 6",
    id: 6,
  },
  {
    url: "/img/img7.jpg",
    title: "Event 7",
    id: 7,
  },
];
