import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const Appliedjjob = () => {
  return (
    <div>
      <Table>
        <TableCaption >A list of your applied job</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 2, 3].map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">23-03-2024</TableCell>
              <TableCell>Frontend Backend</TableCell>
              <TableCell>Google</TableCell>
              <TableCell className="text-right"> <Badge>Selected</Badge></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Appliedjjob;
