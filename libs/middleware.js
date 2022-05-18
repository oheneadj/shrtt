

// import jwt from "jsonwebtoken"
// import User from "../models/user.model"

// export const  protect = async(req, res, next) =>{
//     let token;

//     if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
//         try {
//             //Get token from header
//             token = req.headers.authorization.split(' ')[1]

//             //Verify Token
//             const decoded =jwt.verify(token, "secret");

//             //Get user from the token
//             req.user = await User.findById(decoded.id).select('-password')
            
//             next()

//         }
//         catch{
//             console.log(error)
//             res.status(404)
//             throw new Error('Not authorized')
//         }
//     }

//     if(!token){
//         res.status(401)
//             throw new Error('No token')
//     }
// }