import connectToMongo from "./utils/db.js";
import cookieParser from "cookie-parser";
import express, { json, Router } from "express";
import router from "./routes/user.route.js"
import cors from "cors";
import dotenv from "dotenv"
dotenv.config();
connectToMongo();
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res)=>{
    return res.status(200).json({
        message: "Hello from backend"
    })

})
//Middlewere
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ Updated CORS config
const corsOptions = {
  origin: ["http://localhost:5000"],
  Credentials:true
};
app.use(cors(corsOptions));

// Routes
app.use("/api/v1/user", router);

// "http://localhost:5000/api/v1/user/register"
// "http://localhost:5000/api/v1/user/login"
// "http://localhost:5000/api/v1/user/profile/updateProfile"
// http://localhost:5000/api/v1/user/logout

app.listen(port, () => {
  console.log(`Website is running at http://localhost:${port}`);
});
