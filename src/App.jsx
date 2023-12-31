import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Nav from "./components/Nav"
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage"; 


function App() {
  const router = createBrowserRouter([
    {
      path: "/Nav",
      element: <Nav />,
    },
    {
      path: "/",
      element: <HomePage />,
    },

  ]);

  return <RouterProvider router={router} />;
}

export default App;
