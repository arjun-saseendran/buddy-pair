import { TotalSubscribers } from "../components/TotalSubscribers/TotalSubscribers";
import { TotalUsers } from "../components/TotalUser/TotalUser";
import { SubscriptionsPerMonth } from "../components/SubscriptionsPerMonth/SubscriptionsPerMonth";
import { BalanceAnalytics } from "../components/BalanceAnalytics/BalanceAnalytics";
import { UnpaidUsers } from "../components/unpaidusers/UnpaidUsers";
import { Expense } from "../components/expense/Expense";

export const Finance = () => {
  return (
    <div className="mt-10 w-[1300px]">
      <h1 className="ms-32 mb-2 text-xl md:mb-10 md:text-3xl">Finance</h1>
      <div className="flex flex-col gap-2 xl:flex-row xl:justify-between md:ms-0  ">
        <div >
          <TotalUsers />
        </div>
        <div >
          <TotalSubscribers />
        </div>
        <div >
          <SubscriptionsPerMonth />
        </div>
      </div>
      <div >
        <BalanceAnalytics />
      </div>
      <div className="flex flex-col justify-center xl:flex-row gap-2">
        <div>
          <UnpaidUsers />
        </div>
        <div >
          <Expense />
        </div>
      </div>
    </div>
  );
};
