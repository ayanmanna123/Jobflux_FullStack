import React from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Jobs from "./Jobs";
import { Badge } from "lucide-react";
import { useSelector } from "react-redux";
const jobarray = [1, 2, 3, 4, 5,6];
const Job = () => {
  const {alljobs} = useSelector(store=> store.job)
  return (
    <div>
      <Navbar />
      <div className=" w-full p-4 mx-auto mt-5 ">
        <div className="flex gap-5 w-full">
          <div className="w-20%">
            <FilterCard />
          </div>

          {alljobs.length <= 0  ? (
           <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pd-5">
              <div className="grid grid-cols-3 gap-4 ">
                { alljobs.map((job) => (
                  <div key={job._id}>
                    <Jobs job={job} />
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
