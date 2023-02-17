import React from "react";

const InfiniteScroll = ({ icons, scrolling }) => {
  const Icons = () => (
    <div className="w-1/2 h-full flex justify-around items-center py-2">
      {icons.map((icon) => (
        <div
          key={icon.name}
          className="flex flex-col justify-center items-center"
        >
          <img
            className="w-[60px] h-[60px] object-contain xl:w-[80px] xl:h-[80px] py-2"
            alt={icon.name}
            src={icon.path}
          />
          <p>{icon.name}</p>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className="grid grid-cols-1 md:p-0 md:grid-cols-6 mb-4">
        <div className="h-[100px] relative flex flex-col md:col-start-2 md:col-end-6 overflow-hidden">
          <div className={`${scrolling} w-[200%] absolute flex h-full`}>
            <Icons />
            <Icons />
          </div>
        </div>
      </div>
    </>
  );
};

export default InfiniteScroll;
