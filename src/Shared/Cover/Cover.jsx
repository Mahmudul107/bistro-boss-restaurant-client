import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50  }}
      bgImage={img}
      
      bgImageAlt="the menu"
      strength={-200}
    >
      <div
        className="hero min-h-[600px] relative"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md bg-black bg-opacity-40 h-72 w-[1320px] p-8 font-[Cinzel] absolute ">
            <h1 className="mb-5 text-5xl font-bold uppercase">
              {title}
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
