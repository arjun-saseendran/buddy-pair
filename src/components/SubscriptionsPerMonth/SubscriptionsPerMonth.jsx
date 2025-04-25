export const SubscriptionsPerMonth = () => {
  return (
    <div className="bg-white flex items-center gap-4 px-1 md:px-4 rounded-lg  w-80 md:w-[670px] xl:w-full py-2">
      <div>
        <span className="bg-[#FDC43E] inline-block w-12 h-12 rounded-full"></span>
      </div>
      <div>
        <div>Subscription per month</div>
        <div className="font-bold">$123,465</div>
        <div className="flex gap-1">
          <p className="text-green-600">+23%</p>
          <p className="text-gray-500">than last month</p>
        </div>
      </div>
    </div>
  );
};
