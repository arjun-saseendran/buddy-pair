import { CustomerArrival } from "./components/CustomerArrival/CustomerArrival.jsx";
import { RevenuePie } from "./components/RevenuePie/RevenuePie.jsx";

export const App = () => {
  return (
    <>
    <div className="grid xl:grid-cols-2">
<div>

      <CustomerArrival />
</div>
<div>

      <RevenuePie />
</div>
    </div>
    </>
  );
};
