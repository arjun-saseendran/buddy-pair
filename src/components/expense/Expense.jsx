import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import { Typography } from "@material-tailwind/react";

export const Expense = () => {
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
    <div className="bg-white pe-20 mt-20  py-4 ps-8 rounded-xl mx-auto w-[600px]">
      <h1 className="font-bold font-arial mb-10">Expense</h1>
      <div className="flex flex-col space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <div>
              <img className="bg-[#ff4550] rounded-full w-10 h-10" />
            </div>

            <div>
              <div>#123456789</div>
              <div className="text-gray-400 text-xs">
                2 March 2021, 13:45 PM
              </div>
            </div>
          </div>

          <div>$ 50,036</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <div>
              <img className="bg-[#ff4550] rounded-full w-10 h-10" />
            </div>

            <div>
              <div>#123456789</div>
              <div className="text-gray-400 text-xs">
                2 March 2021, 13:45 PM
              </div>
            </div>
          </div>

          <div>$ 50,036</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <div>
              <img className="bg-[#ff4550] rounded-full w-10 h-10" />
            </div>

            <div>
              <div>#123456789</div>
              <div className="text-gray-400 text-xs">
                2 March 2021, 13:45 PM
              </div>
            </div>
          </div>

          <div>$ 50,036</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <div>
              <img className="bg-[#ff4550] rounded-full w-10 h-10" />
            </div>

            <div>
              <div>#123456789</div>
              <div className="text-gray-400 text-xs">
                2 March 2021, 13:45 PM
              </div>
            </div>
          </div>

          <div>$ 50,036</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <div>
              <img className="bg-[#ff4550] rounded-full w-10 h-10" />
            </div>

            <div>
              <div>#123456789</div>
              <div className="text-gray-400 text-xs">
                2 March 2021, 13:45 PM
              </div>
            </div>
          </div>

          <div>$ 50,036</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <div>
              <img className="bg-[#ff4550] rounded-full w-10 h-10" />
            </div>

            <div>
              <div>#123456789</div>
              <div className="text-gray-400 text-xs">
                2 March 2021, 13:45 PM
              </div>
            </div>
          </div>

          <div>$ 50,036</div>
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

        <div className="flex gap-3 items-center ">
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
  );
};
