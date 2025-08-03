import connectToMongo from "../backend/utils/db.js";
import cookieParser from "cookie-parser";
import express from "express";
import router from "../backend/routes/user.route.js";
import companyroute from "../backend/routes/company.route.js";
import jobroute from "../backend/routes/job.route.js";
import applicationroute from "../backend/routes/application.route.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
connectToMongo();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}));

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello from backend" });
});

app.use("/api/v1/user", router);
app.use("/api/v2/company", companyroute);
app.use("/api/v3/job", jobroute);
app.use("/api/v4/application", applicationroute);

// ✅ Export Express app as Vercel handler
export default app;
