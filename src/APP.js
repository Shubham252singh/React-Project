import React, {Suspense,lazy,useState} from "react";
import ReactDOM from 'react-dom/client'
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import About from "./components/About";
import Contact from "./components/Contact"
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

const AppLayout = () => {
    const [userName,setUserName] = useState("Shubham Singh");
    return(
    <div className="baseCont">
        <UserContext.Provider value={{ login_name: userName, setUserName: setUserName }}>
            <Header />
            <Outlet />
            <Footer />
        </UserContext.Provider>
    </div>
);
}
const Grocery = lazy(()=>{return import("./components/Grocery")});
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/grocery",
                element:<Suspense fallback ={<h1>Loading......</h1>}><Grocery /></Suspense> ,
            },
        ]
    },

])

let root = ReactDOM.createRoot(document.getElementById("test"));

root.render(<RouterProvider router={appRouter} />);
