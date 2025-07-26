import React, { useState } from "react";
import Navbar from "../shared/Navbar.jsx";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button.jsx";
import { Link } from "react-router-dom";
const signup = () => {
  const [input, setinput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
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
          onSubmit={sunmitHandler}
          className=" w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">signup</h1>
          <div className="my-2">
            <Label>Full name</Label>
            <Input
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandaler}
              placeholder="ayan manna"
            />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandaler}
              placeholder="ayam@gmail.com"
            />
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input
              type="text"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandaler}
              placeholder="+91 1234567890"
            />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              value={input.password}
              name="passowd"
              onChange={changeEventHandaler}
              placeholder="123@example"
            />
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
                  checked={input.role === "student"}
                  onChange={changeEventHandaler}
                  className="cursor-pointer"
                />
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandaler}
                  className="cursor-pointer"
                />
                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <lable>Profile</lable>
              <input
                accept="image/*"
                type="file"
                onChange={changeEileHandler}
                className="cursor-pointer"
              />
            </div>
            <div>
              <Button type="submit" className={" w-full my-4"}>
                Signup
              </Button>
              <span className="text-sm">
                Already have an account?
                <Link to="/login" className="text-blue-600">
                  {" "}
                  login
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default signup;
