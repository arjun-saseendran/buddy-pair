import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import { Typography } from "@material-tailwind/react";

export const UnpaidUsers = () => {
  const [active, setActive] = React.useState(1);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
    className: "rounded-full",
  });

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div className=" overflow-x-auto md:overflow-x-visible">
    <div className="md:ms-0 bg-white md:px-4 mt-20 p-5  md:py-4 rounded-xl w-[660px] h-[600px]">
      <h1 className="font-bold font-arial mb-10">Unpaid Users</h1>
      <div className="flex flex-col space-y-12">
        <div className="flex items-center">
          <div className="mr-4">
            <img className="bg-[#c1bbec] rounded-full w-10 h-10" />
          </div>
          <div className="flex-1">Samantha W</div>
          <div className="flex-1">ID 123456789</div>
          <div className="flex-1">Dating</div>
          <div className="ml-auto">
            <BiDotsHorizontalRounded className="text-gray-400 text-2xl" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            <img className="bg-[#c1bbec] rounded-full w-10 h-10" />
          </div>
          <div className="flex-1">Samantha W</div>
          <div className="flex-1">ID 123456789</div>
          <div className="flex-1">Dating</div>
          <div className="ml-auto">
            <BiDotsHorizontalRounded className="text-gray-400 text-2xl" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            <img className="bg-[#c1bbec] rounded-full w-10 h-10" />
          </div>
          <div className="flex-1">Samantha W</div>
          <div className="flex-1">ID 123456789</div>
          <div className="flex-1">Dating</div>
          <div className="ml-auto">
            <BiDotsHorizontalRounded className="text-gray-400 text-2xl" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            <img className="bg-[#c1bbec] rounded-full w-10 h-10" />
          </div>
          <div className="flex-1">Samantha W</div>
          <div className="flex-1">ID 123456789</div>
          <div className="flex-1">Dating</div>
          <div className="ml-auto">
            <BiDotsHorizontalRounded className="text-gray-400 text-2xl" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            <img className="bg-[#c1bbec] rounded-full w-10 h-10" />
          </div>
          <div className="flex-1">Samantha W</div>
          <div className="flex-1">ID 123456789</div>
          <div className="flex-1">Dating</div>
          <div className="ml-auto">
            <BiDotsHorizontalRounded className="text-gray-400 text-2xl" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-10">
        <div>
          <div className="flex items-center gap-8">
            <Typography color="gray" className="font-normal">
              Showing <strong className="text-gray-900">{active}</strong> -{" "}
              <strong className="text-gray-900">10</strong> from{" "}
              <strong className="text-gray-900">100</strong> data
            </Typography>
          </div>
        </div>

        <div className="flex gap-2 items-center ">
          <div>
            <span
              variant="text"
              className="flex items-center gap-2  rounded-full"
              onClick={prev}
              disabled={active === 1}
            >
              <MdArrowLeft className="text-5xl text-[#909090]" />
            </span>
          </div>

          <div>
            <IconButton {...getItemProps(1)}>1</IconButton>
          </div>
          <div>
            <IconButton {...getItemProps(2)}>2</IconButton>
          </div>
          <div>
            <IconButton {...getItemProps(3)}>3</IconButton>
          </div>

          <div>
            <span
              variant="text"
              className="flex items-center rounded-full cursor-pointer"
              onClick={next}
              disabled={active === 5}
            >
              <MdArrowRight className="text-[#909090] text-5xl" />
            </span>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};
