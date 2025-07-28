import React from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "@/components/ui/badge"; // ✅ Correct (adjust path as per your structure)
import { Label } from "./ui/label";
import Appliedjjob from "./Appliedjjob";

const skilles = ["React", "Node.js", "Tailwind", "MongoDB"];

const Profile = () => {
  const ishaveresume = true;
  return (
    <div>
      <Navbar />

      <div className="max-w-4xl mx-auto bg-white border border-gray-300 rounded-2xl my-5 p-8">
        <div className="flex  gap-4 justify-between">
          <div className="flex items-center ">
            <Avatar className="h-24 w-24">
              <AvatarImage
                className="object-cover"
                src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
              />

              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full name</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <Button className={"text-right"} variant={"outline"}>
            <Pen />
          </Button>
        </div>
        <div>
          <div className="gap-3 pl-5">
            <div className="flex items-center gap-3">
              <Mail />
              <span>ayan@gmail.com</span>
            </div>
            <div className="flex gap-3 items-center">
              <Contact />
              <span>9907072795</span>
            </div>
          </div>
          <div>
            <h1 className="font-semibold mt-4 mb-2">Skills</h1>
            <div className="flex gap-2 flex-wrap">
              {skilles != 0
                ? skilles.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))
                : "na"}
            </div>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className={"text-md font-bold"}> Resume</Label>
            {ishaveresume ? (
              <a
                href="https://www.youtube.com/"
                target="blank"
                className="text-blue-500 w-full hover:underline"
              >
                this is your resume
              </a>
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl ">
        <h1 className={'font-bold'}>applied jobs</h1>
        <Appliedjjob />
      </div>
    </div>
  );
};

export default Profile;
