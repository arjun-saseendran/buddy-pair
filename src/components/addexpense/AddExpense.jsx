import { Button } from "@material-tailwind/react";
export const AddExpense = () => {
  return (
    <>
      <div className=" flex flex-col h-[610px]   space-y-2 ms-14 mt-4  w-[250px] md:ms-24 md:mt-20   md:w-[400px] bg-white rounded-xl shadow-sm">
        <h1 className=" text-sm md:text-3xl ms-8 pt-4  md:pb-6">Add Expense</h1>
        <div className="ms-2 md:ms-8 mt-8 me-2 md:me-12">
          <label className="block text-xs text-gray-400">Date</label>
        </div>
        <div className="ms-2 md:ms-8 mt-8 me-2 md:me-12">
          <input
            type="date"
            className="text-black pl-4 outline-none text-sm pe-1 placeholder-gray-400 font-thin border border-gray-300
                     rounded-lg py-2  w-full"
          />
        </div>
        <div className="ms-2 md:ms-8 mt-8 me-2 md:me-12">
          <label className="block text-xs text-gray-400">Invoice No</label>
        </div>
        <div className="relative ms-2 md:ms-8 me-2 md:me-12">
          <div className="relative">
            <input
              type="text"
              className="text-black pl-4 pr-12 outline-none text-sm placeholder-gray-300 font-thin border border-gray-300
                       rounded-lg py-2 w-full"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
              Clear
            </button>
          </div>
        </div>
        <div className="ms-2 md:ms-8 me-2 md:me-12">
          <label className="block text-xs text-gray-400">Category</label>
        </div>
        <div className="ms-2 md:ms-8 me-2 md:me-12">
          <select
            className="text-gray-400 pl-4 outline-none text-sm placeholder-gray-400  font-thin border border-gray-300
            rounded-lg px-24 py-2 w-full "
          >
            <option value="" disabled selected>
              Subscription Type
            </option>
            <option value="movies">Movies</option>
            <option value="sports">Sports</option>
            <option value="arts">Arts</option>
          </select>
        </div>

        <div className="ms-2 md:ms-8 me-2 md:me-12">
          <label className="block text-xs text-gray-400">
            Description Remark
          </label>
        </div>
        <div className="ms-2 md:ms-8 me-2 md:me-12">
          <input
            className="text-black pl-4 outline-none text-sm placeholder-gray-400  font-thin border border-gray-300
            rounded-lg px-24 py-2 w-full"
            type="text"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-2 ms-2 md:ms-8 me-2 md:me-12">
          <div>
            <label className="block mb-1 text-xs text-gray-400">DR</label>
            <input
              className="text-black pl-4 outline-none text-sm placeholder-gray-400  font-thin border border-gray-300
              rounded-lg px-24 py-2 w-full"
              type="text"
            />
          </div>
          <div>
            <label className="block text-xs mb-1 text-gray-400">DR</label>
            <input
              className="text-black pl-4 outline-none text-sm placeholder-gray-400  font-thin border border-gray-300
              rounded-lg px-24 py-2 w-full"
              type="text"
            />
          </div>
        </div>
        <div className="relative ms-2 md:ms-8 me-2 md:me-12">
          <label className="block text-xs text-gray-500 uppercase">
            Invoice
          </label>
        </div>
        <div className="relative ms-2 md:ms-8 me-2 md:me-12">
          <label
            htmlFor="file-upload"
            className="flex justify-center items-center  w-full border border-dashed border-gray-300
                       rounded-lg py-2 px-4 text-gray-500 text-sm cursor-pointer"
          >
            <span
              className="w-4 h-4 flex items-center justify-center bg-gray-500 text-white
                             rounded-full text-xs mr-2"
            >
              +
            </span>
            Add Invoice
          </label>
          <input id="file-upload" type="file" className="hidden" />
        </div>
        <div className="ms-2 md:ms-8 mt-8 pt-2 me-2 md:me-12">
          <Button className="rounded-full bg-[#64558F] py-2 w-full">Add</Button>
        </div>
      </div>
    </>
  );
};
