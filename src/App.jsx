import { SideBar } from "./components/sidebar/SideBar";
import { Header } from "./components/header/Header";
import { UserProfile } from "./components/userprofile/UserProfile";
import { SubscriptionPlan } from "./components/modal/SubscriptionPlan";
import { UpdateSMSSetting } from "./components/settings/UpdateSMSSetting";
import { UpdateMailSetting } from "./components/settings/UpdateMailSetting";
import {AddExpense} from "./components/addexpense/AddExpense.jsx";
import { Invoice } from "./components/Invoice/Invoice.jsx";

export const App = () => {
  return (
    <>
      <Header/>
      <SideBar />
      {/* <UserProfile/> */}
      {/* <SubscriptionPlan/> */}
      {/*<UpdateSMSSetting/>*/}
      {/*<UpdateMailSetting/>*/}
     {/* <AddExpense/> */}
     <Invoice/>
    </>
  );
};
