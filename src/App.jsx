import { useState } from "react";
import NavBar from "./component/Navbar/NavBar";
import "./App.css";
import { AiFillAlert } from "react-icons/ai";
import Cart from "./component/Cart/Cart";
import Home from "./component/HomePage/Home";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
  {
    path: "/navbar",
    element: <NavBar/>,
  }
]);

function App() {
  return (
    <div className="h-[100vh] flex">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
