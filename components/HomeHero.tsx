"use client";
import React from "react";

const HomeHero = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#recientes")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <section id="bienvenido">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">¡Bienvenido!</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <a
                href="#recientes"
                onClick={handleClick}
                className="btn btn-primary"
              >
                Explorar
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeHero;
