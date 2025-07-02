import {
  createBrowserRouter,
  
} from "react-router";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Footer from "daisyui/components/footer";
import Login from "../Pages/Login/Login";
// import Banner from "../Pages/Home/Banner/Banner";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "login",
            element: <Login></Login>
        },
        // {
        //     path: "/",
        //     element: 
        // },
        // {
        //     path: "/",
        //     element: 
        // },
    ]
  },
]);

export default router;
