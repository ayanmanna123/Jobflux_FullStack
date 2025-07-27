import React from "react";
import Navbar from "./shared/Navbar";
import Jobs from "./Jobs";
const rendomJobs = [1, 2, 3,4 ,5,6];
const Brouse = () => {
  return (
    <div className="">
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold">Search result- ({rendomJobs.length})</h1>
        <div className="grid gap-4 grid-cols-3 ">
          {rendomJobs.map((item, index) => {
            return <Jobs />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Brouse;
