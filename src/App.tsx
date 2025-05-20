import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./componets/Header";
import Layout from "./componets/Layout";
import Complete from "./pages/complete";
import Join from "./pages/join";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="">
        <Join />
      </div>
    ),
  },

  {
    path: "/complete",
    element: (
      <div className="flex items-center justify-center flex-col">
        <Complete />
      </div>
    ),
  },
]);

function App() {
  return (
    <Layout>
      <Header />
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
