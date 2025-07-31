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
import { MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CompanyTable = () => {
  const navigate = useNavigate();
  const companies = useSelector((store) => store.company?.companies || []);

  return (
    <div className="rounded-xl shadow-md overflow-auto border border-gray-200 bg-white">
      <Table className="min-w-full text-sm text-gray-700">
        <TableCaption className="text-sm py-4 text-gray-500">
          A list of your registered companies
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-100 text-gray-800 uppercase text-xs tracking-wider">
            <TableHead className="text-center py-3">Logo</TableHead>
            <TableHead className="text-center py-3">Name</TableHead>
            <TableHead className="text-center py-3">Description</TableHead>
            <TableHead className="text-center py-3">Location</TableHead>
            <TableHead className="text-center py-3">Website</TableHead>
            <TableHead className="text-center py-3">Date</TableHead>
            <TableHead className="text-center py-3">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-6 text-gray-500">
                You have not registered any company
              </TableCell>
            </TableRow>
          ) : (
            companies.map((company) => (
              <TableRow
                key={company._id}
                className="transition hover:bg-gray-50 hover:shadow-sm"
              >
                <TableCell className="text-center py-4">
                  <Avatar>
                    <AvatarImage
                      src={
                        company.logo ||
                        "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                      }
                      className="w-10 h-10 rounded-full object-cover mx-auto"
                      alt="Company Logo"
                    />
                  </Avatar>
                </TableCell>
                <TableCell className="text-center font-medium">
                  {company.name}
                </TableCell>
                <TableCell className="text-center">
                  {company.description || "—"}
                </TableCell>
                <TableCell className="text-center">
                  {company.location || "—"}
                </TableCell>
                <TableCell className="text-center">
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {company.website || "—"}
                  </a>
                </TableCell>
                <TableCell className="text-center">
                  {company.createdAt?.split("T")[0]}
                </TableCell>
                <TableCell className="text-center">
                  <button
                    onClick={() => navigate(`/admin/company/${company._id}`)}
                    className="text-indigo-600 hover:text-indigo-800 transition"
                  >
                    <MoreHorizontal />
                  </button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompanyTable;
