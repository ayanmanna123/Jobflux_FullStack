import { setAlljobs } from "@/Redux/jobSlice";
import { store } from "@/Redux/store";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const usegetAllJobs = () => {
  const dispatch = useDispatch();
  const {searchedQuery} =useSelector(store=>store.job)
  useEffect(() => {
    const fatchalljob = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/v3/job/getalljob?keyword=${searchedQuery}`,
          { withCredentials: true }
        );
        if (res.data.success) {
          dispatch(setAlljobs(res.data.jobs));
        }
      } catch (error) {}
    };
    fatchalljob();
  }, []);
};

export default usegetAllJobs;
