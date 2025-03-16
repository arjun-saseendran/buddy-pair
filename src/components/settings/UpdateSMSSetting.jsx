import React from "react";
import { Button } from "@material-tailwind/react";

export const UpdateSMSSetting = () => {
  return (
    <div className="container px-4 mt-4 md:mt-14 ms-12 md:ms-20 w-5/6 h-full">
      <div className="flex flex-col space-y-4 h-[635px] md:h-[440px] px-4 bg-white">
        <div>
          <h2 className="py-2 ms-2">Update SMS Setting</h2>
          <hr />
        </div>

        <div>
          <label className="block  text-gray-400 text-sm">SMS Driver</label>
          <select
            className="text-black bg-gray-50 shadow-sm pl-4 py-[9px] outline-none text-sm placeholder-gray-400 font-thin border border-gray-300
               w-full"
          >
            <option value="" disabled selected>
              Twilio
            </option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="w-full">
            <label className="block  text-gray-400 text-sm">Twilio SID</label>
            <div>
              <input
                className="text-black bg-gray-50 pl-4 outline-none text-sm placeholder-gray-400  font-thin border border-gray-300 w-full
               py-2"
                type="text"
                placeholder="Twilio SID"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="block  text-gray-400 text-sm">Nexmo Key</label>
            <div>
              <input
                className="text-black w-full bg-gray-50 pl-4 outline-none text-sm placeholder-gray-400  font-thin border border-gray-300
               py-2"
                type="text"
                placeholder="Nexmo Key"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="w-full">
            <label className="block  text-gray-400 text-sm">
              Twilio Auth Token
            </label>
            <div>
              <input
                className="text-black bg-gray-50 pl-4 outline-none text-sm placeholder-  font-thin border border-gray-300 w-full
               py-2"
                type="password"
                placeholder="Twilio Auth Token"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="block  text-gray-400 text-sm">Nexmo Secret</label>
            <div>
              <input
                className="text-black w-full bg-gray-50 pl-4 outline-none text-sm placeholder-gray-400  font-thin border border-gray-300
               py-2"
                type="text"
                placeholder="Nexmo Secret"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="w-full">
            <label className="block  text-gray-400 text-sm">
              Twilio Sender Number
            </label>
            <div>
              <input
                className="text-black bg-gray-50 pl-4 outline-none text-sm placeholder-  font-thin border border-gray-300 w-full
               py-2"
                type="text"
                placeholder="Twilio Sender Number"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="block  text-gray-400 text-sm">
              Nexmo Sender Name
            </label>
            <div>
              <input
                className="text-black w-full bg-gray-50 pl-4 outline-none text-sm placeholder-gray-400  font-thin border border-gray-300
               py-2"
                type="text"
                placeholder="Nexmo Sender Name"
              />
            </div>
          </div>
        </div>
        <div>
          <hr className="mt-4" />
          <Button className="bg-[#20E8B6] mt-4">&#10003; Update</Button>
        </div>
      </div>
    </div>
  );
};
