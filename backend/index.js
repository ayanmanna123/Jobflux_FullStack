import connectToMongo from "./utils/db.js";
import cookieParser from "cookie-parser";
import express from "express";
import router from "./routes/user.route.js";
import companyroute from "./routes/company.route.js";
import jobroute from "./routes/job.route.js";
import applicationroute from "./routes/application.route.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
connectToMongo();

const app = express();
const port = process.env.PORT || 3000;

// ✅ CORS Options
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://jobflux-full-stack-8sja.vercel.app"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "auth-token"]
};

app.use(cors(corsOptions));

// ✅ Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ Test Route
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Hello from backend"
  });
});

// ✅ API Routes
app.use("/api/v1/user", router);
app.use("/api/v2/company", companyroute);
app.use("/api/v3/job", jobroute);
app.use("/api/v4/application", applicationroute);

// ✅ Server Listener
app.listen(port, () => {
  console.log(`Website is running at http://localhost:${port}`);
});
