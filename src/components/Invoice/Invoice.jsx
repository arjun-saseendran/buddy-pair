import { FaEdit } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";

export const Invoice = () => {
  return (
    <div className="mx-20 ">
      <div className="mt-10 flex flex-col space-y-4 ">
        <div className="flex text-[6px] md:text-base gap-1 md:gap-0  md:flex-wrap-none md:justify-around items-center">
          <div>
            <input type="checkbox" />
          </div>
          <div>Sl.No</div>
          <div>Date</div>
          <div>Invoice No</div>
          <div>Category</div>
          <div>Description/Remarks</div>

          <div>DR</div>
          <div>CR</div>
          <div>Invoice</div>
        </div>
        <hr className="border-1 border-gray-400 mt-2" />

        <div className="flex md:text-regular text-[6px] md:text-base gap-1 md:gap-0    md:justify-around items-center bg-white px-2 py-3 w-52 md:w-auto rounded-xl">
          <div>
            <input type="checkbox" />
          </div>
          <div>1</div>
          <div>xx/xx/xxxx</div>
          <div>4954545</div>
          <div>Other</div>
          <div>Paid cash</div>
          <div>0</div>
          <div>4954545</div>
          <div className="flex justify-around gap-4">
            <div>
              <FaFileInvoice />
            </div>
            <div>
              <FaEdit />
            </div>
          </div>
        </div>
        <div className="flex justify-around 
        px-2 md:text-regular text-[6px] md:text-base gap-1 md:gap-0 w-52 md:w-auto 
        items-center md:flex-wrap-none bg-white py-3 rounded-xl">
          <div>
            <input type="checkbox" />
          </div>
          <div>1</div>
          <div>xx/xx/xxxx</div>
          <div>4954545</div>
          <div>Other</div>
          <div>Paid cash</div>
          <div>0</div>
          <div>4954545</div>
          <div className="flex justify-around gap-4">
            <div>
              <FaFileInvoice />
            </div>
            <div>
              <FaEdit />
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center 
        px-2 md:text-regular text-[6px] md:text-base gap-1 md:gap-0 w-52 md:w-auto 
        
        bg-white py-3 rounded-xl">
          <div>
            <input type="checkbox" />
          </div>
          <div>1</div>
          <div>xx/xx/xxxx</div>
          <div>4954545</div>
          <div>Other</div>
          <div>Paid cash</div>
          <div>0</div>
          <div>4954545</div>
          <div className="flex justify-around gap-4">
            <div>
              <FaFileInvoice />
            </div>
            <div>
              <FaEdit />
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center 
        px-2 md:text-regular text-[6px] md:text-base gap-1 md:gap-0 w-52 md:w-auto 
           bg-white py-3 rounded-xl">
          <div>
            <input type="checkbox" />
          </div>
          <div>1</div>
          <div>xx/xx/xxxx</div>
          <div>4954545</div>
          <div>Other</div>
          <div>Paid cash</div>
          <div>0</div>
          <div>4954545</div>
          <div className="flex justify-around gap-4">
            <div>
              <FaFileInvoice />
            </div>
            <div>
              <FaEdit />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
