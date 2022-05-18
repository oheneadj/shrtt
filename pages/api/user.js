import dbConnect from "../../libs/dbConnect";
import User from "../../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import {generateToken} from "../../libs/auth"

export default async function handler(req, res) {
  console.log("handler")
  //Connect to the Database
  await dbConnect();

  //Get user details from request body 
  const { name, email, password } = req.body;

  if (req.method === "POST") {
    console.log("POST");

    console.log(email);

    if (!name || !email || !password) return res.status(400).json({error:"Please add all fields"})

    // Check if user already exists
    const userExists = await User.findOne({ email: email });

    if (userExists) return res.status(400).json({ msg: "Email already in use" });


    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //Create user
    const user = await User.create({
      email: email,
      name: name,
      password: hashedPassword
    });
    

    if(user){
      res.status(201).json({ 
        _id:user.id,
        name:user.name,
        email:user.email,
        token: generateToken(user.id)
       });
    }else{
      res.status(400).json({error:"Server error"})
    }

    
  } else {
    res.status(405).json({ error: `${req.method} not allowed` });
  }
}