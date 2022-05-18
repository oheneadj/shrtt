import jwt from "jsonwebtoken"

export const generateToken =  (id) => {
     return jwt.sign(
         {id}, "secret", {expiresIn: '4d'},)
};