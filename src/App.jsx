import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Footer from "./components/Footer";



function App() {
  const router = createBrowserRouter([
    // {
    //   path: "/contact",
    //   element: <ContactPage />,
    // },
    {
      path: "/",
      element: <Footer />,
    },

  ]);

  return <RouterProvider router={router} />;
}

export default App;
