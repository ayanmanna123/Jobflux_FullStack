import React from "react";
import { Button } from "./ui/button";
import { Badge } from "@/components/ui/badge";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Jobs = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border-gray-300">
      <div className="flex items-center justify-between"></div>
      <p className="text-sm text-gray-600 ">2 days ago</p>
      <Button variant="outline" className="rounded-full" size="icon">
        <Bookmark />
      </Button>
      <div className="flex my-2 items-center gap-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar className="w-10 h-10">
            <AvatarImage
              src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
              alt="Logo"
            />
            <AvatarFallback>CL</AvatarFallback>
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-shadow-gray-500">India</p>
        </div>
      </div>
      <div className="">
        <h1 className="font-black tsxt-lg my-2">Titale</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore?
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge variant={"ghost"} className={"text-[#F83002]  font-bold"}>
          12 position
        </Badge>
        <Badge variant={"ghost"} className={"text-[#7209b7] font-bold"}>
          Part time
        </Badge>
        <Badge variant={"ghost"} className={"text-blue-700  font-bold"}>
          24 LPA
        </Badge>
      </div>
      <div className=" flex items-center gap-4 mt-4">
        <Button variant={'outline'}>Details</Button>
        <Button className={'bg-[#7209b7]'}>save for later</Button>
      </div>
    </div>
  );
};

export default Jobs;
