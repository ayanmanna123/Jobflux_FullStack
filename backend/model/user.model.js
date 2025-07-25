import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phonenumber: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "requiter"],
      required: true,
    },
    profile: {
      bio: { type: String },
      skills: [{ type: String }],
      resume: { type: String }, // URL or path to the resume file
      reasumeOriginalName: { type: String }, // Original name of the resume file
      company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
      profilephoto: {
        type: String,
        default: "",
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User32", userSchema);
export default User;
