 import React, { useEffect, useState } from "react";
import axios from "axios";

const DashboardStats = () => {
  const [userCount, setUserCount] = useState(0);
  const [companyCount, setCompanyCount] = useState(0);
  const [jobCount, setJobCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [userRes, companyRes, jobRes] = await Promise.all([
          axios.get("http://localhost:5000/api/v1/user/getalluser"),
          axios.get("http://localhost:5000/api/v2/company/getallcomoany"),
          axios.get("http://localhost:5000/api/v3/job/gealljobcount"),
        ]);

        setUserCount(userRes.data.alluser.length);
        console.log(userRes)
        setCompanyCount(companyRes.data.allcompany.length);
        setJobCount(jobRes.data.alljob.length);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching counts:", error);
        setLoading(false);
      }
    };

    fetchCounts();
  }, []);

  if (loading) return <p>Loading stats...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-9 p-4">
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-700">Users</h2>
        <p className="text-3xl font-bold text-blue-600">{userCount}+</p>
      </div>
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-700">Companies</h2>
        <p className="text-3xl font-bold text-green-600">{companyCount}+</p>
      </div>
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-700">Jobs</h2>
        <p className="text-3xl font-bold text-purple-600">{jobCount}+</p>
      </div>
    </div>
  );
};

export default DashboardStats;
