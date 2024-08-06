const UserModule = require("../models/userModule");
const bcrypt = require("bcryptjs");
exports.register = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Something Missing",
      });
    }

    const userExist = await UserModule.findOne({ email });
    if (userExist) {
      return res.status(400).json({
        success: false,
        message: "User Already Register",
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await UserModule.create({
      fullname,
      email,
      password: hashPassword,
    });
    if (newUser) {
      return res.status(200).json({
        success: true,
        message: "User Register Successfully",
      });
    }
  } catch (err) {
    console.log("Intrenal Error in User register Controller");
    console.log(err);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Something Missing",
      });
    }

    const userExist = await UserModule.findOne({ email });
    if (!userExist) {
      return res.status(400).json({
        success: false,
        message: "User Not Registered",
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, userExist.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Please Enter the Correct Password",
      });
    }

    return res.status(200).json({
      success: true,
      userId: userExist._id, // Assuming your User model has _id as the user ID
      message: `Welcome Back ${userExist.fullname}`,
    });
  } catch (err) {
    console.log("Internal Error in Login Controller");
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
