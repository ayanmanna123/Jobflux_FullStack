import React from "react";
import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import CompanyTable from "./CompanyTable";
import { useNavigate } from "react-router-dom";

const Companies = () => {
  const navigat = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl gap-4 mx-auto my-10 pl-6 ">
        <div className=" flex items-center justify-between my-5">
          <Input className={"w-fit"} placeholder="filter by name" />
          <Button onClick={() => navigat("/admine/company/creat")}>new company</Button>
        </div>
        <CompanyTable />
      </div>
    </div>
  );
};

export default Companies;
