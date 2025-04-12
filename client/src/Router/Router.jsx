import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRouter from "./PrivateRouter";
import Paintings from "../Pages/Paintings/Paintings";
import GeneratePaintings from "../Pages/GeneratePaintings/GeneratePaintings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/paintings",
        element: (
          <PrivateRouter>
            <Paintings></Paintings>
          </PrivateRouter>
        ),
      },
      {
        path: "/generate-painting",
        element: <PrivateRouter><GeneratePaintings></GeneratePaintings></PrivateRouter>
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
