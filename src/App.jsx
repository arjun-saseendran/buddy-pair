import {Staff} from "./components/Staff/Staff.jsx";
import {TotalWorkDone} from "./components/TotalWorkDone/TotalWorkDone.jsx";

export const App = () => {
  return (
    <>
      <div className="grid gird-cols-2">
        <div>
        <Staff/>
        </div>
        <div>
        <TotalWorkDone/>
        </div>
      </div>
    </>
  );
};
