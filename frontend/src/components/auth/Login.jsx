import React, { useState } from "react";
import Navbar from "../shared/Navbar.jsx";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "../ui/button.jsx";
import { Link } from "react-router-dom";

const Login = () => {
  const [input, setinput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const changeEventHandaler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };
  const changeEileHandler = (e) => {
    setinput({ ...input, file: e.target.files?.[0] });
  };
  const sunmitHandler = async (e) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-3xl mx-auto gap-2">
        <form
          action=""
          className=" w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">login</h1>

          <div className="my-2">
            <Label>Email</Label>
            <Input type="email" placeholder="ayam@gmail.com" />
          </div>

          <div className="my-2">
            <Label>Password</Label>
            <Input type="password" placeholder="123@example" />
          </div>
          <div className="flex justify-between items-center">
            <RadioGroup
              defaultValue="option-one"
              className={"flex items-center gap-4 my-4"}
            >
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  className="cursor-pointer"
                />
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  className="cursor-pointer"
                />
                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <div>
              <Button type="submit" className={" w-full my-4"}>
                Login
              </Button>
              <span className="text-sm">
                Don't have an account?
                <Link to="/signup" className="text-blue-600">
                  {" "}
                  signup
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
