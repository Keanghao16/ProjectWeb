import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DiscoverPage from "./pages/DiscoverPage";
import PlaceDetail from "./pages/PlaceDetailPage";
import CreateTrip from "./pages/CreateTrip";
import PhnomPenhList from "./pages/PhnomPenhList";
import MuseumDetail from "./pages/MuseumDetail";
import Museum2Detail from "./pages/Museum2Detail";
import SiemReapList from "./pages/SiemReapList";
import PreahVihearList from "./pages/PreahVihearList";
import RoyalDetail from "./pages/RoyalDetail";
import AngkorDetail from "./pages/AngkorDetail";

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
    {
      path: "discover/phnompenhlist",
      element: <PhnomPenhList />,
    },
    {
      path: "discover/siemreaplist",
      element: <SiemReapList />,
    },
    {
      path: "discover/preahvihearlist",
      element: <PreahVihearList />,
    },
    {
      path: "discover/phnompenhlist/museum",
      element: <MuseumDetail />,
    },
    {
      path: "discover/phnompenhlist/museum2",
      element: <Museum2Detail />,
    },
    {
      path: "discover/phnompenhlist/royaldetail",
      element: <RoyalDetail />,
    },
    {
      path: "discover/siemreaplist/angkordetail",
      element: <AngkorDetail />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
