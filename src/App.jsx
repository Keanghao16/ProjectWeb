import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import DiscoverPage from "./pages/DiscoverPage";
import AboutPage from "./pages/AboutPage";

import PhnomPenh from "./pages/ListPage/PhnomPenh";
import SiemReap from "./pages/ListPage/SiemReap";
import Placedetail from "./pages/DetailPage/Placedetail";
import PreahVihear from "./pages/ListPage/PreahVihear";
import Battambang from "./pages/ListPage/Battambang";
import Kampot from "./pages/ListPage/Kampot";
import Mondulkiri from "./pages/ListPage/Mondulkiri";
import KohKong from "./pages/ListPage/KohKong";
import StungTreng from "./pages/ListPage/StungTreng";

import PlaceDetailPage from "./pages/PlaceDetailPage";

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
      path: "/discover/phnompenh",
      element: <PhnomPenh />,
    },
    {
      path: "/discover/siemreap",
      element: <SiemReap />,
    },
    {
      path: "/discover/preahvihear",
      element: <PreahVihear />,
    },
    {
      path: "/discover/battambang",
      element: <Battambang />,
    },
    {
      path: "/discover/kampot",
      element: <Kampot />,
    },
    {
      path: "/discover/mondulkiri",
      element: <Mondulkiri />,
    },
    {
      path: "/discover/kohkong",
      element: <KohKong />,
    },
    {
      path: "/discover/stungtreng",
      element: <StungTreng />,
    },

    // {
    //   path: "/discover/kohkong",
    //   element: <PlaceListPage province={KohKong} />,
    // },
    // {
    //   path: "/placedetail",
    //   element: <PlaceDetailPage />,
    // },
    // {
    //   path: "/kohkong",
    //   element: <PlaceListPage province={KohKong} />,
    // },
    {
      path: "/Placedetail",
      element: <Placedetail />,
    },
  ]);
  // onclick ={() => history.back()}
  return <RouterProvider router={router} />;
}

export default App;
