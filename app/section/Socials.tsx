"use client";

import {
  Name1,
  Name2,
  Name3,
  Name4,
  Name5,
  Name6,
} from "@/components/features/card";
import { FeatureTitle } from "@/components/features/title";
import React from "react";

const features = [
  {
    title: "Name 1",
    id: "1",
    card: Name1,
  },
  {
    title: "Name 2",
    id: "2",
    card: Name2,
  },
  {
    title: "Name 3",
    id: "3",
    card: Name3,
  },
  {
    title: "Name 4",
    id: "4",
    card: Name4,
  },
  {
    title: "Name 5",
    id: "5",
    card: Name5,
  },
  {
    title: "Name 6",
    id: "6",
    card: Name6,
  },
];

const Socials = () => {
  return (
    <section id="socials" className="mx-auto max-w-6xl px-4">
      <div className="flex w-full gap-20 items-start">
        <div className="w-full py-[50vh]">
          <ul>
            {features.map((feature) => (
              <li key={feature.id}>
                <FeatureTitle id={feature.id}>{feature.title}</FeatureTitle>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sticky top-0 flex h-screen items-center">
          <div className="w-2/3 relative aspect-square bg-gray-100 rounded-full">
            {features.map((feature) => (
              <feature.card id={feature.id} key={feature.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Socials;
