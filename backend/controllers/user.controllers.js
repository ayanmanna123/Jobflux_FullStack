import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/user.model.js";
// #1 creat user
export const register = async (req, res) => {
  try {
    const { fullname, email, phonenumber, password, role } = req.body;
    if (!fullname || !email || !password || !phonenumber || !role) {
      return res.status(400).json({
        message: "Sumthing is missing ",
        success: false,
      });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User is already exist with this email",
        success: false,
      });
    }
    const hascode = await bcrypt.hash(password, 10);
    await User.create({
      fullname,
      email,
      phonenumber,
      password: hascode,
      role,
    });
    return res.status(200).json({
      message: "Account created successfully",
      success: true,
    });
  } catch (error) {
    console.error("REGISTER ERROR:", error);
    return res.status(500).json({
      message: "Internal server error 1",
      success: false,
    });
  }
};

// #2 this is our login router
export const login = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Sumthing is missing ",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Usr not find with this email",
        success: false,
      });
    }
    const matchpassword = await bcrypt.compare(password, user.password);
    if (!matchpassword) {
      return res.status(400).json({
        message: "invalide credentils",
        success: false,
      });
    }
    if (user.role !== role) {
      return res.status(400).json({
        message: "invalide credentils",
        success: false,
      });
    }
    const tokenData = {
      userId: user._id,
    };
    const token = jwt.sign(tokenData, process.env.jwt_Secret, {
      expiresIn: "1d",
    });
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        message: "Login successful",
        success: true,
        user: {
          _id: user._id,
          fullname: user.fullname,
          email: user.email,
          phonenumber: user.phonenumber,
          role: user.role,
          profile: user.profile,
        },
      });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
// #3 this is our logout route
export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "logout succesfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: " internal server error",
      success: false,
    });
  }
};
// #4 this is our uplode profile route
export const updateProfile = async (req, res) => {
  try {
    const { fullname, email, phonenumber, bio, skills } = req.body;
    const file = req.file;
    let skillsArray;
    if (skills) {
      skillsArray = skills.split(",");
    }

    const userId = req.id;
    let user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({
        message: "at first login to update your profile ",
        success: false,
      });
    }
    if (fullname) {
      user.fullname = fullname;
    }
    if (email) {
      user.email = email;
    }
    if (phonenumber) {
      user.phonenumber = phonenumber;
    }
    if (bio) {
      user.profile.bio = bio;
    }
    if (skills) {
      user.profile.skills = skillsArray;
    }

    await user.save();
    return res.json({
      message: "Profile updated successfully",
      success: true,
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        phonenumber: user.phonenumber,
        role: user.role,
        profile: user.profile,
      },
    });
  } catch (error) {
    console.error("update ERROR:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
