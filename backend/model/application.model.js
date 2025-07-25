import { application } from "express";
import mongoose from "mongoose";
const applicationSchema = new mongoose.Schema({
    job:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
        required: true
    },
    applicabnts:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true

    },
    status: {
        type: String,
        enmu: ["pending", "accepted", "rejected"],
        defult: "pending"
    }
},{timestamps:true});
const Application = mongoose.model("Application", applicationSchema);
export default Application;