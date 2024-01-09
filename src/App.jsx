import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import DiscoverPage from "./pages/DiscoverPage";
import AboutPage from "./pages/AboutPage";

import PlaceDetailPage from "./pages/PlaceDetailPage";
import PlaceListPage from "./pages/PlaceListPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/discover",
      element: <DiscoverPage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/placelist",
      element: <PlaceListPage />,
    },
    {
      path: "/placedetail",
      element: <PlaceDetailPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
