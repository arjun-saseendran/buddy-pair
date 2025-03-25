export const TotalWorkDone = () => {
  let progress = 70;
  const circumference = 100 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const totalDays = Math.round((progress / 100) * 42);
  const weeks = Math.floor(totalDays / 7);
  const days = totalDays % 7;

  return (
    <div className="bg-white w-full md:w-72 h-[300px] rounded-xl shadow-xl mx-auto my-10 p-10">
      <div className="flex justify-between items-center ">
        <div className="font-bold text-xs md:text-sm">Total work done</div>

        <div>
          <select
            className="text-[#238899] pl-2 bg-[#B0D4DB] outline-none text-sm placeholder-gray-400 font-thin border border-gray-300
               rounded-lg py-2 w-24"
          >
            <option value="" disabled selected>
              This Week
            </option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-32 h-32 mt-10 mx-auto">
        <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="47"
            stroke="lightgray"
            strokeWidth="6"
            fill="transparent"
          />
          <circle
            cx="50"
            cy="50"
            r="47"
            stroke="blue"
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-500 ease-in-out"
          />
        </svg>

        <span className="absolute text-xl font-bold text-gray-800">
          {weeks}w: {days}d
        </span>
      </div>
    </div>
  );
};
