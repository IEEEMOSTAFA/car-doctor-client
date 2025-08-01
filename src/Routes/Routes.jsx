import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/signUp/signUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

// Remove unused import
// import Footer from "daisyui/components/footer";
// import Banner from "../Pages/Home/Banner/Banner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "checkout/:id",
        element:  <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes> ,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: "bookings",
        element:  <PrivateRoutes><Bookings></Bookings></PrivateRoutes> ,
       
      },
    ],
  },
]);

export default router;