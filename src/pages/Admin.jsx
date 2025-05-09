import { AdminProfile } from "../components/AdminProfile/AdminProfile";
import { AdminEditProfile } from "../components/AdminEditProfile/AdminEditProfile";
import { Staff } from "../components/Staff/Staff";
import { TotalWorkDone } from "../components/TotalWorkDone/TotalWorkDone";

export const Admin = () => {
  return (
    <div className="md:flex  gap-6 m-4 md:m-4 md:gap-2 xl:gap-6 xl:m-10">
      <div className="ms-10">
        <AdminProfile />
      </div>
      <div className="ms-10">
        <AdminEditProfile />
      </div>
      <div className="ms-10 md:ms-0">
        <div>
          <Staff />
        </div>
        <div>
          <TotalWorkDone />
        </div>
      </div>
    </div>
  );
};
