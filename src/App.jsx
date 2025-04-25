import { Layout } from "../src/layout/Layout";
import { Accounts } from "./pages/Accounts";
import { Finance } from "./pages/Finance";

export const App = () => {
  return (
    <div className="mb-20">
      <Layout />
      <section>
     <Accounts/>
      </section>

    </div>
  );
};
