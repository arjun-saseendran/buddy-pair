import { AddExpense } from "./components/addexpense/AddExpense.jsx";
import { Expense } from "./components/expense/Expense.jsx";
import { Invoice } from "./components/Invoice/Invoice.jsx";
import { UnpaidUsers } from "./components/unpaidusers/UnpaidUsers.jsx";
import { Layout } from "./layout/Layout.jsx";

export const App = () => {
  return (
    <>
      <div className="flex flex-wrap">
      <div>
      <AddExpense/>
      </div>
      <div>
      <Invoice/>
      </div>
      </div>
    </>
  );
};
