import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Discover from "./pages/DiscoverPage";
import PlaceDetail from "./pages/PlaceDetailPage";
import CreateTrip from "./pages/CreateTrip";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      // element: <PlaceDetailPage />,
    },
    {
      path: "/discover",
      element: <Discover />,
    },
    {
      path: "/about",
      element: <About />,
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
