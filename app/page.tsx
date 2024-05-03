import React from "react";
import HomeHero from "@/components/HomeHero";
import BlogCard from "@/components/BlogCard";
import HomeStats from "@/components/HomeStats";

export default async function Index() {
  return (
    <div>
      <HomeHero />
      <section id="recientes">
      <h1 className="text-4xl font-bold text-center mt-16">Nuestros Númeross</h1>
        <div className="flex items-center justify-center">
          <HomeStats />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-center mt-16">Aportaciones Recientes</h1>
        </div>
        {/* loop to populate 12 blogcards in a 3xN grid on large screens or 1xN on smaller screens */}
        {Array.from({ length: 4 }, (_, i) => (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-16" key={`grid-${i}`}>
            {Array.from({ length: 3 }, (_, j) => (
              <BlogCard key={`card-${i}-${j}`}/>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}
