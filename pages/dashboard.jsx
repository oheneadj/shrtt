import React from "react";
import Link from "next/link";
import CreateLink from "../components/createLink"
import LinkCard from "../components/LinkCard"
import Footer from "../components/Footer"

const Login = () => {
  return (
    <div className="bg-blue-100 h-full">
      <div className="flex flex-col items-center justify-center">
      <CreateLink/>   
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
