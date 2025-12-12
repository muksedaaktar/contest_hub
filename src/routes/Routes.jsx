import { createBrowserRouter } from "react-router";
import RootLayout from "../layOuts/RootLayout";
import Home from "../Pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,   // ❗ Correct
    children: [
      {
        index: true,
        element: <Home />,     // ❗ Correct
      }
    ]
  },
]);
