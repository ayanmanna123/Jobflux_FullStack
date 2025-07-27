import React from "react";
import LatestJobCard from "./LatestJobCard";
const randomjob = [1, 2, 3, 4, 5, 6, 7, 8];
const LatestJob = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold ">
        Latest & Top Job Openings
        <span className="text-[#6A38C2]">Job Openings</span>
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5 ">
        {randomjob.slice(0,6).map((item, index) => (
          <LatestJobCard />
        ))}
      </div>
    </div>
  );
};

export default LatestJob;
