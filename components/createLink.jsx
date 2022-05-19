import React, { useState } from "react";
import Link from "next/link";


const CreateLink = ({handleCreateLink}) => {


  const [longUrl, setLongUrl] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    handleCreateLink(longUrl)

    setLongUrl('');

    console.log("login error")
  };



  return (
          <div>here</div>
  );
};

export default CreateLink;
