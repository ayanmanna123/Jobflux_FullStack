import { setAlljobs } from "@/Redux/jobSlice";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const usegetAllJobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fatchalljob = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/v3/job/getalljob",
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
