import Job from "../model/job.model.js";
import Company from "../model/Company.model.js";
import mongoose from "mongoose";
export const jobPortal = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      experiencelavel,
      position,
      companyId,
    } = req.body;
    const userid = req.id;
    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !jobType ||
      !experiencelavel ||
      !position ||
      !companyId
    ) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(400).json({
        message: "Invalid company ID",
        success: false,
      });
    }
    if (!companyId || !mongoose.Types.ObjectId.isValid(companyId)) {
      return res.status(400).json({
        message: "Invalid company ID format",
        success: false,
      });
    }

    const job = await Job.create({
      title,
      description,
      requirements: requirements.split(" "),
      salary: Number(salary),
      location,
      jobType,
      experiencelavel: experiencelavel,
      position,
      company: companyId,
      createdBy: userid,
    });
    return res.status(200).json({
      message: "new job created successfully",
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getAlljobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };
    const jobs = await Job.find(query)
      .populate({
        path: "company",
      })
      .sort({ createdAt: -1 });
    if (!jobs) {
      return res.status(404).json({
        message: "Jobs not found.",
        success: false,
      });
    }
    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getjobById = async (req, res) => {
  try {
    const jobId = req.params.id;

    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Jobs not found.",
        success: false,
      });
    }
    return res.status(200).json({ job, success: true });
  } catch (error) {
    console.log(error);
  }
};

export const getadminjob = async (req, res) => {
  try {
    const admineid = req.id;
    const jobs = await Job.find({ createdBy: admineid });

    if (jobs.length === 0) {
      return res.status(404).json({
        message: "job not found",
        success: true,
      });
    }
    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
