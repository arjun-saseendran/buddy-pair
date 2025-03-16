import React from "react";
import { Button } from "@material-tailwind/react";

export const UpdateMailSetting = () => {
  return (
    <div className="container px-4 mt-4 md:mt-14 ms-12 md:ms-20 w-5/6 h-full">
      <div className="flex flex-col space-y-4 h-[700px] md:h-[440px] px-4 bg-white">
        <div>
          <h2 className="py-2 ms-2">Update Mail Setting</h2>
          <hr />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>
            <label className="block  text-gray-400 text-sm">
              Mail Driver *
            </label>
            <select
              className="text-black bg-gray-50 shadow-sm pl-4 py-[9px] outline-none text-sm placeholder-gray-400 font-thin border border-gray-300
               w-full"
            >
              <option value="" disabled selected>
                SMTP
              </option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="expert">Expert</option>
            </select>
          </div>
          <div className="w-full">
            <label className="block  text-gray-400 text-sm"> Mail Host *</label>
            <div>
              <input
                className="text-black w-full bg-gray-50 pl-4 outline-none text-sm placeholder-gray-400  font-thin border border-gray-300
               py-2"
                type="text"
                placeholder="Mail Host*"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="w-full">
            <label className="block  text-gray-400 text-sm">Mail Port *</label>
            <div>
              <input
                className="text-black bg-gray-50 pl-4 outline-none text-sm placeholder-  font-thin border border-gray-300 w-full
               py-2"
                type="text"
                placeholder="Mail Port*"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="block  text-gray-400 text-sm">
              Mail Username *
            </label>
            <div>
              <input
                className="text-black w-full bg-gray-50 pl-4 outline-none text-sm placeholder-gray-400  font-thin border border-gray-300
               py-2"
                type="text"
                placeholder="Mail Username"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="w-full">
            <label className="block  text-gray-400 text-sm">
              Mail Password *
            </label>
            <div>
              <input
                className="text-black bg-gray-50 pl-4 outline-none text-sm placeholder-  font-thin border border-gray-300 w-full
               py-2"
                type="password"
                placeholder="Mail Password"
              />
            </div>
          </div>
          <div>
            <label className="block  text-gray-400 text-sm">
              Mail Encryption *
            </label>
            <select
              className="text-black bg-gray-50 shadow-sm pl-4 py-[9px] outline-none text-sm placeholder-gray-400 font-thin border border-gray-300
               w-full"
            >
              <option value="" disabled selected>
                TLS
              </option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="expert">Expert</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="w-full">
            <label className="block  text-gray-400 text-sm">
              Sender Email *
            </label>
            <div>
              <input
                className="text-black bg-gray-50 pl-4 outline-none text-sm placeholder-  font-thin border border-gray-300 w-full
               py-2"
                type="mail"
                value="info@mail.com"
                placeholder="Sender Email"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="block  text-gray-400 text-sm">
              Sender Name *
            </label>
            <div>
              <input
                className="text-black w-full bg-gray-50 pl-4 outline-none text-sm placeholder-gray-400  font-thin border border-gray-300
               py-2"
                type="text"
                placeholder="Sender Name"
                value="Info Company"
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
