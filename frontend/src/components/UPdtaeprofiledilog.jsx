import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";
import { setuser } from "../Redux/authSilce"; 
const UPdtaeprofiledilog = ({ open, setopen }) => {
  const [loding, setloding] = useState(false);

  const { user } = useSelector((store) => store.auth);
 
  const [input, setInput] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    phonenumber: user?.phonenumber || "",
    bio: user?.profile?.bio || "",
    skills: user?.profile?.skills?.join(", ") || "",
    file: null,
  });
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandelar = async (e) => {
    e.preventDefault();
    console.log(input)
    setloding(true);
    const fromdata = new FormData();
    fromdata.append("fullname", input.fullname);
    fromdata.append("email", input.email);
    fromdata.append("phonenumber", input.phonenumber);
    fromdata.append("bio", input.bio);
    fromdata.append("skills", input.skills);
    if (input.file) {
      fromdata.append("file", input.file); // ✅ Fix
    }

    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/user/profile/updateProfile`,
        fromdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
       

      if (res.data.success) {
        dispatch(setuser(res.data.user));  
        toast.success(res.data.message);
      }
    } catch (error) {
   
      toast.error(error.response?.data?.message || "Update failed");
    } finally {
      setloding(false);
      setopen(false);
    }
  };
  const filechangeHandelar = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setopen}>
        <DialogContent
          className="sm:max-w-[425px]"
          onInteractOutside={(e) => {
            e.preventDefault();
            setopen(false);
          }}
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandelar}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={input.fullname}
                  name="fullname"
                  onChange={changeHandler}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  value={input.email}
                  name="email"
                  onChange={changeHandler}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="number" className="text-right">
                  Number
                </Label>
                <Input
                  id="number"
                  value={input.phonenumber}
                  name="phonenumber"
                  onChange={changeHandler}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right">
                  Bio
                </Label>
                <Input
                  id="bio"
                  value={input.bio}
                  name="bio"
                  onChange={changeHandler}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-right">
                  Skills
                </Label>
                <Input
                  id="skills"
                  value={input.skills}
                  name="skills"
                  onChange={changeHandler}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="file" className="text-right">
                  Resume
                </Label>
                <Input
                  id="file"
                  type="file"
                  accept="image/*"
                 name="file"
                  onChange={filechangeHandelar}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              {loding ? (
                <Button>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button type="submit">Update</Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UPdtaeprofiledilog;
