import { createBrowserRouter, RouterProvider } from "react-router-dom";


import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DiscoverPage from "./pages/DiscoverPage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/discover",
      element: <DiscoverPage/>,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },

  ]);

  return <RouterProvider router={router} />;
}

export default App;
