import { Button } from "@/components/ui/button";
import Navbar from "./components/shared/Navbar.jsx";
import {
  Routes,
  Route,
  useNavigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home.jsx";
import Job from "./components/Job.jsx";
import Brouse from "./components/Brouse.jsx";
import Profile from "./components/profile.jsx";
import Jobdescription from "./components/Jobdescription.jsx";
import Companies from "./components/admin/Companies.jsx";
import CompantCreat from "./components/admin/CompantCreat.jsx";
import Companysetup from "./components/admin/Companysetup.jsx";
import AdminJobs from "./components/admin/AdminJobs.jsx";

const appRouter = createBrowserRouter([
   {
    path: "/",
    element: <Home/>
  },
  {
    path: "/Home",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path:  "/signup",
    element: <Signup />
  },
  {
    path:  "/jobs",
    element: <Job />
  },
  {
    path:  "/browse",
    element: <Brouse />
  },
  {
    path:  "/profile",
    element: <Profile />
  },
   {
    path:  "/discription/:id",
    element: <Jobdescription />
  },
  {
    path:  "/admin/compnaies",
    element: <Companies />
  },
  {
    path:  "/admine/company/creat",
    element: <CompantCreat />
  },
   {
    path:  "/admine/company/:id",
    element: <Companysetup/>
  },
     {
    path:  "/admin/jobs",
    element: <AdminJobs/>
  },
  
]);
function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
