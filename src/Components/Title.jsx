import React from "react";

const Title = ({ header, paragraph }) => {
  return (
    <div className="w-screen flex flex-col justify-center items-center my-16">
      <h3 id="About" className="text-5xl lg:text-7xl">
        {header}
      </h3>
      <p className="text-lg lg:text-2xl">{paragraph}</p>
    </div>
  );
};

export default Title;