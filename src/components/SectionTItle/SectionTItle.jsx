import React from "react";

const SectionTItle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-8">
      <i>
        <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
      </i>
      <h3 className="text-3xl uppercase border-y-4 py-4 font-[Inter]">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTItle;
