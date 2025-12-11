import { createBrowserRouter } from "react-router";
import RootLayout from "../layOuts/RootLayout";
import { Component } from "react";
import Home from "../Pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component : RootLayout,
    Children : [
        {
            index : true ,
            Component : Home
        }

    ]
  },
]);