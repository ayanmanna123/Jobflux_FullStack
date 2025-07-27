import React from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Jobs from "./Jobs";
import { Badge } from "lucide-react";
const jobarray = [1, 2, 3, 4, 5,6];
const Job = () => {
  return (
    <div>
      <Navbar />
      <div className=" w-full p-4 mx-auto mt-5 ">
        <div className="flex gap-5 w-full">
          <div className="w-20%">
            <FilterCard />
          </div>

          {jobarray.length <= 0 ? (
            <snap>Job not found</snap>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pd-5">
              <div className="grid grid-cols-3 gap-4 ">
                {jobarray.map((item, index) => (
                  <div>
                    <Jobs />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      
      </div>
      
    </div>
  );
};

export default Job;
