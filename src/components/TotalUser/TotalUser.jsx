export const TotalUsers = () => {
  return(
    <div className="bg-white flex items-center gap-4 md:px-4 px-1 ms-8 md:ms-0 rounded-lg md:w-72 py-2">
    <div>
      <span className="bg-[#4E44B4] inline-block w-12 h-12 rounded-full"></span>
    </div>
    <div>
      <div>Total Users</div>
      <div className="font-bold">932</div>
      <div className="flex gap-1">
        <p className="text-green-600">+10%</p>
        <p className="text-gray-500">than last month</p>
      </div>
    </div>
    </div>
    
    
  )
}