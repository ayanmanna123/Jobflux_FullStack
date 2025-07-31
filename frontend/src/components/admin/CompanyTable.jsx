import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Edit2, MoreHorizontal, MoveHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CompanyTable = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Table className="border">
        <TableCaption>A list of your registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/4 text-center">Logo</TableHead>
            <TableHead className="w-1/4 text-center">Name</TableHead>
            <TableHead className="w-1/4 text-center">Date</TableHead>
            <TableHead className="w-1/4 text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="w-1/4 text-center">
              <Avatar>
                <AvatarImage
                  src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                  className="w-10 h-10 rounded-full object-cover mx-auto"
                  alt="Company Logo"
                />
              </Avatar>
            </TableCell>
            <TableCell className="w-1/4 text-center">OpenAI</TableCell>
            <TableCell className="w-1/4 text-center">2025-07-30</TableCell>
            <TableCell className="w-1/4 text-center cursor-pointer">
              <button className="text-blue-500 hover:underline cursor-pointer" >
                <span>
                  <MoreHorizontal />
                </span>
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default CompanyTable;
