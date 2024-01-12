import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DiscoverPage from "./pages/DiscoverPage";
import PlaceDetail from "./pages/PlaceDetailPage";
import CreateTrip from "./pages/CreateTrip";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
      path: "/details",
      element: <PlaceDetail />,
    },
    {
      path: "/createtrip",
      element: <CreateTrip />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
