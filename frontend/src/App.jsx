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
import Home from "./components/Home";

const appRouter = createBrowserRouter([
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
]);
function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
