export const TotalSubscribers = () => {
  return (
    <div className="bg-white flex items-center gap-4 md:px-4 px-1 ms-8 md:ms-0 rounded-lg md:w-72 py-2">
      <div>
        <span className="bg-[#FB7D5A] inline-block w-12 h-12 rounded-full"></span>
      </div>
      <div>
        <div>Total TotalSubscribers</div>
        <div className="font-bold">754</div>
        <div className="flex gap-1">
          <p className="text-red-600">-0.5%</p>
          <p className="text-gray-500">than last month</p>
        </div>
      </div>
    </div>
  );
};
