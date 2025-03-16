import { MdWindow } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaRing } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { RiCheckboxFill } from "react-icons/ri";

export const SideBar = () => {
  return (
    <>
      <nav className="absolute top-0 h-[1600px] md:h-[1200px] bg-white">
        <div className="flex flex-col space-y-16 justify-between items-center bg-white w-12 mt-7">
          <div className="flex flex-col space-y-16 items-center">
            <span>
              <RiCheckboxFill className="bg-[#6e50f2] cursor-pointer" />
            </span>
            <span>
              <MdWindow className="bg-[#6e50f2] cursor-pointer" />
            </span>
            <span>
              <FaRegHeart className="cursor-pointer" />
            </span>
            <span>
              <FaRing className="cursor-pointer" />
            </span>
            <span>
              <MdShoppingCart className="cursor-pointer" />
            </span>
            <span>
              <FaSearch className="cursor-pointer" />
            </span>
            <span>
              <FaGraduationCap className="cursor-pointer" />
            </span>
            <span>
              <FaCog className="cursor-pointer" />
            </span>
          </div>
          <div className="absolute bottom-12">
            <FaArrowRight className="cursor-pointer" />
          </div>
        </div>
      </nav>
    </>
  );
};
