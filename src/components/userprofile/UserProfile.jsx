import { FaRegImage } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { Button } from "@material-tailwind/react";
import { PhotoCarousel } from "../carousel/PhotoCarousel";

export const UserProfile = () => {
  return (
    <div className="container bg-white mx-[50px]  md:ms-24 md:mx-auto mt-10 rounded-xl p-5 w-5/6 md:max-w-7xl ">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="flex flex-col items-center gap-3">
          <div className=" border-2 border-pink-400 bg-white rounded-full inline-block ">
            <img
              className=" p-1 rounded-full h-32 w-32"
              src="../../../public/dp.jpg"
              alt=""
            />
          </div>
          <div className="w-52 h-14 text-center border-2 border-gray-700">
            <PhotoCarousel/>
          </div>
          <div>
            <input
              className="text-black pl-4 outline-none text-sm placeholder-gray-400  font-thin border border-gray-300
               rounded-lg px-12 py-2"
              type="text"
              placeholder="Age"
            />
          </div>
          <div>
            <input
              className="text-black pl-4 outline-none text-sm placeholder-gray-400  font-thin border border-gray-300
               rounded-lg px-12 py-2"
              type="text"
              placeholder="DOB"
            />
          </div>
          <div>
            <input
              className="text-black pl-4 outline-none text-sm placeholder-gray-400  font-thin border border-gray-300
               rounded-lg px-12 py-2"
              type="text"
              placeholder="Hobbies"
            />
          </div>
          <div>
            <input
              className="text-black pl-4 outline-none text-sm placeholder-gray-400  font-thin border border-gray-300
               rounded-lg px-12 py-2"
              type="text"
              placeholder="Interests"
            />
          </div>
          <div>
            <input
              className="text-black pl-4 outline-none text-sm placeholder-gray-400  font-thin border border-gray-300
               rounded-lg px-12 py-2"
              type="text"
              placeholder="Smoking Habits"
            />
          </div>
          <div>
            <input
              className="text-black pl-4 outline-none text-sm placeholder-gray-400  font-thin border border-gray-300
               rounded-lg px-12 py-2"
              type="text"
              placeholder="Drinking Habits"
            />
          </div>
          <div>
            <input
              className="text-black pl-4 outline-none text-sm placeholder-gray-400  font-thin border border-gray-300
               rounded-lg px-12 py-2"
              type="text"
              placeholder="Qualifications"
            />
          </div>

          <div className="relative">
            <input
              id="fileUpload"
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />

            <label
              htmlFor="fileUpload"
              className="text-gray-400 outline-none text-sm pl-4 placeholder-black font-thin border border-gray-300
         rounded-lg px-[132px] py-2 cursor-pointer block"
            >
              Profile Pic
            </label>

            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black cursor-pointer">
              <FaRegImage className="w-5 h-5" />
            </span>
          </div>
          <div className="relative">
            <input
              id="fileUpload"
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />

            <label
              htmlFor="fileUpload"
              className="text-gray-400 outline-none text-sm placeholder-black pl-4 font-thin border border-gray-300
         rounded-lg px-[82px] py-2 cursor-pointer block"
            >
              Add More Images
            </label>

            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black cursor-pointer">
              <FaRegImage className="w-5 h-5" />
            </span>
          </div>
          <div className="relative">
            <input
              id="fileUpload"
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />

            <label
              htmlFor="fileUpload"
              className="text-gray-400 outline-none text-sm placeholder-black font-thin border pl-4 border-gray-300
         rounded-lg px-[128px] py-2 cursor-pointer block"
            >
              Short Reel
            </label>

            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black cursor-pointer">
              <FaVideo className="w-5 h-5" />
            </span>
          </div>

          <div>
            <input
              className="text-black pl-4 outline-none text-sm placeholder-gray-400  font-thin border border-gray-300
               rounded-lg px-12 py-2"
              type="text"
              placeholder="Job Status"
            />
          </div>
        </div>
        <div className="flex flex-col mt-5 items-center gap-3">
          <div>
            <input
              className="text-black pl-4 outline-none text-sm placeholder-gray-400  font-thin border border-gray-300
               rounded-lg px-12 py-2"
              type="text"
              placeholder="Company Name"
            />
          </div>
          <div>
            <input
              className="text-black pl-4 outline-none text-sm placeholder-gray-400  font-thin border border-gray-300
               rounded-lg px-12 py-2"
              type="text"
              placeholder="Designation"
            />
          </div>
          <div>
            <input
              className="text-black pl-4 outline-none text-sm placeholder-gray-400  font-thin border border-gray-300
               rounded-lg px-12 py-2"
              type="text"
              placeholder="Location"
            />
          </div>
          <div>
            <placeholder className="block mb-2">Job Details</placeholder>

            <input
              className="text-black pl-4 outline-none text-sm placeholder-gray-400  font-thin border border-gray-300
               rounded-lg px-12 py-2"
              type="text"
              placeholder="Title"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-400">Expertise Level</label>
            <select
              className="text-black pl-4 outline-none text-sm placeholder-gray-400 font-thin border border-gray-300
               rounded-lg px-24 py-2 w-full"
            >
              <option value="" disabled selected>
                Value
              </option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="expert">Expert</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-gray-400">Interested In</label>
            <select
              className="text-black pl-4 outline-none text-sm placeholder-gray-400 font-thin border border-gray-300
               rounded-lg px-[130px] py-2 w-full"
            >
              <option value="" disabled selected>
                Value
              </option>
              <option value="movies">Movies</option>
              <option value="sports">Sports</option>
              <option value="arts">Arts</option>
            </select>
          </div>
          <div className="me-[95px]">
            <label className="block me-2 mb-1">Register In</label>
            <div>
            <input type="checkbox" className="accent-black" />
            <span className="ms-2">Dating</span>
            </div>
            <div>
            <input type="checkbox" className="accent-black" />
            <span className="ms-2">Matrimony</span>
            </div>
            <div>
            <input type="checkbox"className="accent-black"/>
            <span className="ms-2">Job Portal</span>
            </div>
            <div>
            <input type="checkbox" className="accent-black"/>
            <span className="ms-2">E commerce</span>
            </div>
            <div>
            <input type="checkbox" className="accent-black"/>
            <span className="ms-2">Study Abroad</span>
            </div>
            
          </div>
          <div className="me-[95px]">
            <label className="block me-2 mb-1">Subscribed In</label>
            <div>
            <input type="checkbox" className="accent-black" />
            <span className="ms-2">Dating</span>
            </div>
            <div>
            <input type="checkbox" className="accent-black" />
            <span className="ms-2">Matrimony</span>
            </div>
            <div>
            <input type="checkbox"className="accent-black"/>
            <span className="ms-2">Job Portal</span>
            </div>
            <div>
            <input type="checkbox" className="accent-black"/>
            <span className="ms-2">E commerce</span>
            </div>
            <div>
            <input type="checkbox" className="accent-black"/>
            <span className="ms-2">Study Abroad</span>
            </div>
            
          </div>
          <div className="flex gap-4 mt-5">
          <Button color="red" className="px-2 py-1 xl:px-6 ">Update</Button>
      <Button color="black" className="px-2 py-1 xl:px-6 ">Cancel</Button>
      <Button color="green" className="px-2 py-1 xl:px-6 ">
        Status ⏷
      </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
