import { useRef } from "react";
import "../EditNotifications/EditNotifications.css";

export const EditNotifications = () => {
  const fileInputRef = useRef(null);

  const handleClick = () => fileInputRef.current.click();

  return (
    <div className="w-[259px] ms-12 md:w-[600px] h-full  bg-white p-4 md:p-10">
      <div className="flex items-center gap-2 md:gap-0 md:justify-between">
        <div className="flex items-center gap-4 md:mx-auto">
          <div>
            <p>Image</p>
          </div>
          <div>
            <label
              onClick={handleClick}
              className="cursor-pointer text-4xl"
              htmlFor="Image"
            >
              +
            </label>
            <input ref={fileInputRef} className="hidden" type="file" />
          </div>
          <div></div>
          <div>
            <button className="bg-green-400 text-white px-8">Status</button>
          </div>
        </div>

        <div>
          <span>x</span>
        </div>
      </div>
      <div className="mx-auto mt-10">
        <img
          className="rounded-xl mx-auto w-72"
          src="../../../public/mountain.jpg"
          alt="mountain"
        />
      </div>
      <div className="md:grid grid-cols-2 mt-4">
        <div className="flex flex-col gap-4">
          <div>
            <input
              className="text-black pl-4 outline-none placeholder-black text-sm font-thin border border-gray-300
               rounded-lg px-12 py-2"
              type="text"
              placeholder="Title"
            />
          </div>
          <div>
            <input
              className="text-black pl-4 outline-none text-sm placeholder-black font-thin border border-gray-300
               rounded-lg px-12 py-2"
              type="text"
              placeholder="Description"
            />
          </div>
          <div>
            <p>Schedule</p>
            <p className="ms-4">From</p>
          </div>
          <div className="ms-8 flex gap-2 date text-sm">
            <span className="text-blue-500 bg-blue-gray-50 p-2 rounded-md">
              Jun 10, 2024
            </span>
            <span className="text-blue-500 rounded-md bg-blue-gray-50 p-2">
              9:41 AM
            </span>
          </div>
          <div>
            <p className="ms-4">To</p>
          </div>
          <div className="ms-8 flex gap-2 date text-sm">
            <span className="text-blue-500 bg-blue-gray-50 p-2 rounded-md">
              Jun 10, 2024
            </span>
            <span className="text-blue-500 rounded-md bg-blue-gray-50 p-2">
              9:41 AM
            </span>
          </div>
        </div>

        <div>
          <div>
            <label className="block mb-2 ms-4 ">Target Audience</label>
            <select
              className="text-gray-400 pl-4 outline-none text-sm placeholder-gray-400 font-thin border border-gray-300
               rounded-lg py-2 md:px-10"
            >
              <option value="" disabled selected>
                User Name/ID/Group/Location
              </option>
              <option value="movies">Movies</option>
              <option value="sports">Sports</option>
              <option value="arts">Arts</option>
            </select>
          </div>
          <div className="mt-6">
            <p className="ms-4 mb-2">Target Specific</p>
            <div className="grid grid-cols-2">
              <div>
                <div>
                  <input type="checkbox" className="accent-black" />
                  <span className="ms-2">Dating</span>
                </div>
                <div>
                  <input type="checkbox" className="accent-black" />
                  <span className="ms-2">E-Commerce</span>
                </div>
                <div>
                  <input type="checkbox" className="accent-black" />
                  <span className="ms-2">Study Aboard</span>
                </div>
              </div>
              <div>
                <div>
                  <input type="checkbox" className="accent-black" />
                  <span className="ms-2">Matrimony</span>
                </div>
                <div>
                  <input type="checkbox" className="accent-black" />
                  <span className="ms-2">Job Portal</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <p className="ms-4 mb-2">Send via</p>
            <div className="grid grid-cols-2">
              <div>
                <div>
                  <input type="checkbox" className="accent-black" />
                  <span className="ms-2">In App</span>
                </div>
                <div>
                  <input type="checkbox" className="accent-black" />
                  <span className="ms-2">SMS</span>
                </div>
              </div>
              <div>
                <div>
                  <input type="checkbox" className="accent-black" />
                  <span className="ms-2">Email</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-self-end ">
        <button className="bg-[#04228E] text-white px-16 py-2">Update</button>
      </div>
    </div>
  );
};
