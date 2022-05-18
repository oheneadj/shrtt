import React from "react";
import Link from "next/link";
import CreateLink from "../components/createLink"
import LinkCard from "../components/LinkCard"
import Footer from "../components/Footer"

const Login = () => {
  
  const handleCreateLink = async (e) => {
    e.preventDefault();

    const credentials = { longUrl };


    let link = await axios.post("/api/auth/register", credentials);


    if(link){

      console.log(link.data)
    }

    console.log("login error")
  };

  return (
    <div className="bg-blue-100 h-full">
      <div className="flex flex-col items-center justify-center">
      <CreateLink handleCreateLink="handleCreateLink"/>   
      <LinkCard/>
      <LinkCard/>
      <LinkCard/>
      <LinkCard/>
      </div>
      <Footer/>
   </div>
  );
};

export default Login;
