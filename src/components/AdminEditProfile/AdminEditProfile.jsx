import { Button } from "@material-tailwind/react";

export const AdminEditProfile = () => {
  return (
    <div>
      <div className="bg-white rounded-xl shadow-xl h-[900px] w-[260px] md:w-[500px] xl:w-[500px]  md:h-[600px] mx-auto mt-10">
        <h3 className=" text-xl ps-8 pt-10">Edit Profile</h3>
        <div className="grid md:grid-cols-2 mt-10 px-8 gap-8">
          <div className="relative">
            <input
              type="text"
              value="Yash"
              id="first-name"
              className="peer px-5 pt-8 pb-2 text-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
              placeholder=" "
            />
            <label
              htmlFor="first-name"
              className="absolute px-2  left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500"
            >
              First Name
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              value="Ghori"
              id="first-name"
              className="peer  px-5 pt-8 pb-2 text-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
              placeholder=" "
            />
            <label
              htmlFor="first-name"
              className="absolute px-2  left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500"
            >
              Last Name
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              value="yghori@asite.com"
              id="first-name"
              className="peer  px-5 pt-8 pb-2 text-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
              placeholder=" "
            />
            <label
              htmlFor="first-name"
              className="absolute px-2  left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500"
            >
              Email
            </label>
          </div>
          <div className="w-full flex items-center gap-2">
            <select className="w-20 text-gray-600 border border-gray-300 rounded-lg py-5 px-2">
              <option className="text-gray-400" value="+91">
                +91
              </option>
              <option value="+1">+1</option>
            </select>

            <div className="relative w-32">
              <label className="text-gray-500 text-sm absolute left-3 top-2">
                Phone Number
              </label>
              <input
                type="text"
                value="8023456789"
                className="w-full ps-2 text-gray-500 border border-gray-300 rounded-lg py-3 pt-6"
              />
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              value="Change Password"
              id="first-name"
              className="peer px-5 pt-8 pb-2 text-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
              placeholder=" "
            />
            <label
              htmlFor="first-name"
              className="absolute px-2  left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500"
            >
              Password
            </label>
          </div>
          <div className="relative w-60">
            <label
              htmlFor="dropdown"
              className="absolute left-3 top-2 text-gray-500 text-sm"
            >
              Nationality
            </label>
            <select
              id="dropdown"
              className=" w-[210px] md:w-56 ps-2   px-4 pt-8 pb-3 text-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
            >
              <option value="" disabled selected>
                India
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="relative w-60">
            <label
              htmlFor="dropdown"
              className="absolute left-3 top-2 text-gray-500 text-sm"
            >
              Designation
            </label>
            <select
              id="dropdown"
              className="w-[210px] ps-2   px-4 pt-8 pb-3 text-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
            >
              <option value="" disabled selected>
                Ul Intern
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
        <div className=" mt-10">
      <Button className=" px-10 py-4 ms-10 md:ms-52 bg-blue-700" >Save</Button>
        </div>
      </div>
    </div>
  );
};
