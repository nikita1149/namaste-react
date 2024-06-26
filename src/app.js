import React ,{lazy, Suspense} from "react";
import ReactDOM from "react-dom/client"; 
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";
import { lazy } from "react";

const Grocery = lazy(()=> import("./components/Grocery"));

const App = () =>{
    return (
        <div className = "app">
            <Header/>
            <Outlet/>
        </div>
    );
}

const appRouter = createBrowserRouter([
{
    path: "/",
    element: <App/>,
    children:[{
        path: "/",
        element: <Body/>
    },
    {
        path: "/contact",
        element: <Contact/>
    },
    {
        path: "/grocery",
        element: <Suspense fallback = {<h1>Loading...</h1>}><Grocery/></Suspense>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
    }
  ],
    errorElement: <Error/>,
},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);