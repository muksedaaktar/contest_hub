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
import Dashboard from "../Pages/profile/Dashboard";
import EditProfile from "../Pages/profile/EditProfile";
import Payment from "../Pages/Payment/Payment";
import CreatorDashboardLayOut from "../Pages/Dashboard/Creator/CreatorDashboardLayOut";
import AddContest from "../Pages/Dashboard/Creator/AddContest";
import MyCreatedContests from "../Pages/Dashboard/Creator/MyCreatedContests";
import SubmittedTasks from "../Pages/Dashboard/Creator/SubmittedTasks";
import EditContest from "../Pages/Dashboard/Creator/EditContest";
import AdminDashBoardLayout from "../Pages/Dashboard/Admin/AdminDashBoardLayout";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import ManageContests from "../Pages/Dashboard/Admin/ManageContests";



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
       <Dashboard />
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
        path: "/payment",
        element: (
       <Privateroute>
        <Payment />
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

       {
  path: "/dashboard/creator",
  element: (
    <Privateroute>
      <CreatorDashboardLayOut />
    </Privateroute>
  ),
  children: [
    {
      path: "add-contest",
      element: <AddContest />,
    },
    {
      path: "my-contests",
      element: <MyCreatedContests />,
    },
    {
      path: "submissions/:contestId",
      element: <SubmittedTasks />,
    },
    {
      path: "edit-contest/:id",
      element: <EditContest />,
    },
      ],
    },

    {
  path: "/dashboard/admin",
  element: (
    <Privateroute>
      <AdminDashBoardLayout />
    </Privateroute>
  ),
  children: [
    {
      path: "manage-users",
      element: <ManageUsers />,
    },
    {
      path: "manage-contests",
      element: <ManageContests />,
    },
  ],
},


      { path: "*",
       element: <NotFoundPage />
      },
    ],
  },
]);
