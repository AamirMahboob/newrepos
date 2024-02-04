import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Cart from "./pages/Cart";
import { ProductData } from "./api/api";
import Product from "./components/Product";
import Login from "./pages/Login";


const Layout = () => {
 
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/",
        element: <Home />,
        loader: ProductData
      },
      {
        path: "/product/:id",
        element:<Product />
      },
      {
        path:"/cart",
        element:<Cart />
      },
      {
        path:"/login",
        element:<Login />
      }
    ]
  }
])
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
