import {
  createBrowserRouter,
  
} from "react-router";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Footer from "daisyui/components/footer";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        // {
        //     path: "/footer",
        //     element: <Footer></Footer>
        // },
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
