import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import DiscoverPage from "./pages/DiscoverPage";
import AboutPage from "./pages/AboutPage";

import PlaceDetailPage from "./pages/PlaceDetailPage";
import PlaceListPage from "./pages/PlaceListPage";


import Placedetail from "./pages/DetailPage/Placedetail"
import { KohKong, PhnomPenh } from "./data/PlaceList.json";

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
      element: <PlaceListPage province={PhnomPenh}/>,
    },
    {
      path: "/discover/kohkong",
      element: <PlaceListPage province={KohKong}/>,
    },
    // {
    //   path: "/placedetail",
    //   element: <PlaceDetailPage />,
    // },
    {
      path: "/kohkong",
      element: <PlaceListPage province={KohKong}/>
    },
    {
      path: "/Placedetail",
      element: <Placedetail />
  }
    
  ]);
  // onclick ={() => history.back()}
  return <RouterProvider router={router} />;
  
}

export default App;