import dbConnect from "../../../libs/dbConnect";
import User from "../../../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import {generateToken} from "../../../libs/auth"
// import { serialize } from "cookie";


export default async function handler(req, res) {
  console.log("handler")
  //Connect to the Database
  await dbConnect();

  //Get user details from request body 
  const { email, password } = req.body;

  if (req.method === "POST") {
    console.log("POST");

    console.log(email);
    console.log(password);

    if (!email || !password) return res.status(400).json({message:"Please add all fields"})

    
    // Check for user email
    const user = await User.findOne({ email: email });
    
    if (user && (await bcrypt.compare(password, user.password))) {
      
      return  res.status(200).json({ 
        _id:user.id,
        name:user.name,
        email:user.email,
        token: generateToken(user.id)
       });}
       else{
      res.status(400).json({message:"Invalid email and/or password"})
    }
   
  } else {
    res.status(405).json({ message: `${req.method} not allowed` });
  }
}