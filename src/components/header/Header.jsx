import { useState } from "react";
import { CgSearch } from "react-icons/cg";
import { FaRegMoon } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const menuClicked = () => {
    setOpen(!open);
  };
  return (
    <nav className="mt-5">
      <div className="md:flex me-6 md:me-0  md:justify-between md:w-[1300px] md:ms-20">
        <div className="flex justify-end md:justify-between gap-2">
          <div
            className={`relative  max-w-[300px] ${open ? "block" : "hidden"}`}
          >
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <CgSearch className="text-gray-500" />
            </span>
            <input
              className="text-black outline-none placeholder-gray-700 font-thin border border-white rounded-xl
              px-3 py-1 pl-9 md:px-12 md:py-1"
              type="text"
              placeholder="Search Here"
            />
          </div>
          <div className="md:hidden flex justify-end items-center">
            <button onClick={menuClicked}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
        <div
          className={`flex justify-end mt-5 md:mt-0 md:block  ${
            open ? "block" : "hidden"
          }`}
        >
          <ul className=" md:flex  md:items-center md:space-x-8 space-y-8 md:space-y-0">
            <li>
              <FaRegMoon className="text-gray-600 ms-4 md:ms-0 cursor-pointer" />
            </li>
            <li>
              <FaRegBell className="text-gray-600 ms-4 md:ms-0 cursor-pointer" />
            </li>
            <li>
              <img
                className="rounded-full h-4 w-4 ms-4 md:h-8 md:w-8   cursor-pointer"
                src="../../../public/dp.jpg"
                alt="profile photo"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
