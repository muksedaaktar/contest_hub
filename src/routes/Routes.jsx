import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layOuts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import AllContests from "../Pages/allContests/AllContests";
import Privateroute from "../privateRoute/Privateroute";
import ContestsDetails from "../Pages/contestsDetails/ContestsDetails";
import NotFoundPage from "../Pages/NotFound/NotFoundPage";
import ExtraSection from "../Pages/Extra/ExtraSection";
import Profile from "../Pages/profile/Profile";
import EditProfile from "../Pages/profile/EditProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true,
         element: <Home /> 
      },
      { path: "login", 
        element: <Login /> 
      },
      { path: "registration",
         element: <Register /> 
      },
      { path: "all-contests", 
        element: <AllContests />
      },
      {
        path: "extra",
        element : <ExtraSection />
      },
      {
       path: "/profile",
       element: (
       <Privateroute>
       <Profile />
      </Privateroute>
       ),
       },

       {
       path: "/edit-profile",
       element: (
       <Privateroute>
        <EditProfile />
       </Privateroute>
        ),
       },

      {
        path: "contest/:id",
        element: (
          <Privateroute>
            <ContestsDetails />
          </Privateroute>
        ),
      },
      { path: "*",
       element: <NotFoundPage />
      },
    ],
  },
]);
