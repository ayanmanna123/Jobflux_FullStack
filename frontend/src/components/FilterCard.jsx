import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const filterdata = [
  {
    filtertype: "location",
    array: ["Deli Ncr", "kolkata", "hydrabad", "Numbai"],
  },
  {
    filtertype: "Industry",
    array: ["Deli Ncr", "kolkata", "hydrabad3", "Numbai"],
  },
  {
    filtertype: "salary",
    array: ["0-40K", "40-80K", "1 lpa+", "10 lpa+"],
  },
];
const FilterCard = () => {
  return (
    <div className="w-full p-3 rounded-md">
      <h1 className="font-bold ">Filter Jobas</h1>
      <hr className="mt-3 " />
      <RadioGroup defaultValue="option-one">
        {filterdata.map((data, index) => (
          <div>
            <h1 className="font-bold ">{data.filtertype}</h1>
            {data.array.map((Item, index) => {
              return (
                <div className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value={Item} />
                  <label>{Item}</label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
