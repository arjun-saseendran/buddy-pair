import React from "react";
import '../Notifications/Notifications.css'
import { FiEdit, FiTrash } from "react-icons/fi";
import { FaBell } from "react-icons/fa";

export const Notifications = () => {
  return (
    <div className="notification ms-10 w-[260px] rounded-xl shadow-xl  mt-4  md:w-[600px] xl:w-[800px] h-full bg-white p-5">
      <p className="text-red-600 mb-5">Notifications</p>
      <div className="flex flex-col gap-4">
     
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <div className="relative inline-block">
            <img className="bg-green-600 rounded-full w-10 h-10" />

            <span className="absolute -top-1 -right-1 bg-blue-700 rounded-full w-4 h-4 flex items-center justify-center">
              <FaBell className="text-white text-[10px]" />
            </span>
          </div>

          <div>
            <div>Distribution</div>
            <div className="text-gray-400 text-xs">
              Bender Rodriguez • DesignDrops • Mar 4
            </div>
          </div>
        </div>

        <div className="p-5 flex items-center gap-5">
          <span className="bg-red-600 text-red-600 rounded-full w-4 h-4 text-center"></span>
          <span>
            <FiEdit />
          </span>
          <span>
            <FiTrash />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <div className="relative inline-block">
            <img className="bg-green-600 rounded-full w-10 h-10" />

            <span className="absolute -top-1 -right-1 bg-blue-700 rounded-full w-4 h-4 flex items-center justify-center">
              <FaBell className="text-white text-[10px]" />
            </span>
          </div>

          <div>
            <div>Distribution</div>
            <div className="text-gray-400 text-xs">
              Bender Rodriguez • DesignDrops • Mar 4
            </div>
          </div>
        </div>

        <div className="p-5 flex items-center gap-5">
          <span className="bg-red-600 text-red-600 rounded-full w-4 h-4 text-center"></span>
          <span>
            <FiEdit />
          </span>
          <span>
            <FiTrash />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <div className="relative inline-block">
            <img className="bg-green-600 rounded-full w-10 h-10" />

            <span className="absolute -top-1 -right-1 bg-blue-700 rounded-full w-4 h-4 flex items-center justify-center">
              <FaBell className="text-white text-[10px]" />
            </span>
          </div>

          <div>
            <div>Distribution</div>
            <div className="text-gray-400 text-xs">
              Bender Rodriguez • DesignDrops • Mar 4
            </div>
          </div>
        </div>

        <div className="p-5 flex items-center gap-5">
          <span className="bg-red-600 text-red-600 rounded-full w-4 h-4 text-center"></span>
          <span>
            <FiEdit />
          </span>
          <span>
            <FiTrash />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <div className="relative inline-block">
            <img className="bg-green-600 rounded-full w-10 h-10" />

            <span className="absolute -top-1 -right-1 bg-blue-700 rounded-full w-4 h-4 flex items-center justify-center">
              <FaBell className="text-white text-[10px]" />
            </span>
          </div>

          <div>
            <div>Distribution</div>
            <div className="text-gray-400 text-xs">
              Bender Rodriguez • DesignDrops • Mar 4
            </div>
          </div>
        </div>

        <div className="p-5 flex items-center gap-5">
          <span className="bg-red-600 text-red-600 rounded-full w-4 h-4 text-center"></span>
          <span>
            <FiEdit />
          </span>
          <span>
            <FiTrash />
          </span>
        </div>
      </div>
      <hr />
      <div className="mt-4">
        <p>Previous notifications</p>
      </div>
      </div>
      
    </div>
  );
};
