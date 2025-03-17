import { AddExpense } from "./components/addexpense/AddExpense.jsx";
import { Invoice } from "./components/Invoice/Invoice.jsx";
import { Layout } from "./layout/Layout.jsx";

export const App = () => {
  return (
    <>
      <Layout />

      {/* <AddExpense/> */}
      <Invoice />
    </>
  );
};
