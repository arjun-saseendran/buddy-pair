import { TotalSubscribers } from "../components/TotalSubscribers/TotalSubscribers";
import { TotalUsers } from "../components/TotalUser/TotalUser";
import { SubscriptionsPerMonth } from "../components/SubscriptionsPerMonth/SubscriptionsPerMonth";
import { BalanceAnalytics } from "../components/BalanceAnalytics/BalanceAnalytics";
import { UnpaidUsers } from "../components/unpaidusers/UnpaidUsers";
import { Expense } from "../components/expense/Expense";

export const Finance = () => {
  return (
    <div className="mx-auto mt-10 w-full md:ms-20 xl:ms-0">
      <h1 className="ms-32 mb-10 md:text-3xl">Finance</h1>
      <div className="flex flex-col md:flex-row md:justify-evenly  gap-2 mx-6 md:mx-0  md:w-full">
        <div><TotalUsers/></div>
        <div><TotalSubscribers/></div>
        <div><SubscriptionsPerMonth/></div>
      </div>
      <div className="flex justify-center ms-0 md:ms-96 lg:ms-56 xl:ms-0">
        <BalanceAnalytics/>
      </div>
      <div className="flex flex-col justify-center gap-4 md:flex-row ms-0 md:ms-96 lg:ms-56 xl:ms-0">
        <div>
          <UnpaidUsers/>
        </div>
        <div>
          <Expense/>
        </div>
       
      </div>
    </div>
  );
};
