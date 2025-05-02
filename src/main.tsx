import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Layout from "./pages/Layout";
import "./index.css";
import { CartProvider } from "./components/context/CartContext";
import HomePage from "./components/homePage/HomePage";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import Product from "./components/CategoryPage/Product";
import CheckOut from "./components/CategoryPage/CheckOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ":categoryName",
        element: <CategoryPage />,
      },
      { path: ":product/:productId", element: <Product /> },
      { path: "/checkout", element: <CheckOut /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
