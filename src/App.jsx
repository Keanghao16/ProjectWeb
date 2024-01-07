import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Discover from "./pages/DiscoverPage";
import PlaceDetail from "./pages/PlaceDetailPage"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      // element: <Home />,
      element: <PlaceDetail />,
    },
    {
      path: "/discover",
      element: <Discover/>,
    },
    {
      path: "/about",
      element: <About />,
    },

  ]);

  return <RouterProvider router={router} />;
}

export default App;
