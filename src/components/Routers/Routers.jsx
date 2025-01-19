import { createBrowserRouter } from "react-router";
import Home from "../Home/Home";
import App from "../../App";


const Routers = () => {
    

    const router = createBrowserRouter([
        {
          path:'/',
          element: <App></App>,
          children: [
            {
                path: ''
            }
          ]
        },
        // {
        //   path:'/',
        //   element: <Home></Home>
        // },
      ])
      
      return router

};

export default Routers;