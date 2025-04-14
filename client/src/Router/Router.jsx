import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRouter from "./PrivateRouter";
import Paintings from "../Pages/Paintings/Paintings";
import GeneratePaintings from "../Pages/GeneratePaintings/GeneratePaintings";
import SinglePaintingDetails from "../Pages/SinglePaintingDetails/SinglePaintingDetails";

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
        element: (
          <PrivateRouter>
            <GeneratePaintings></GeneratePaintings>
          </PrivateRouter>
        ),
      },

      {
        path: "/paintings/:id",
        element: (
          <PrivateRouter>
            <SinglePaintingDetails></SinglePaintingDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/paintings/${params.id}`),
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
