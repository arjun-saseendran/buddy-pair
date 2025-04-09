import { Layout } from "../src/layout/Layout";
import { Finance } from "./pages/Finance";

export const App = () => {
  return (
    <>
      <Layout />
      <section>
      <Finance />
      </section>
    </>
  );
};
