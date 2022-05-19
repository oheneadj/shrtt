import React, { useState } from "react";
import Link from "next/link";
import LinkCard from "../components/LinkCard"

const LinkList = ({ links, handleDeleteLink}) => {

    const handleCopyLink = e => {
      navigator.clipboard.writeText(shortUrl);
      alert(`You have copied "${shortUrl}"`);
    }



  return (<>
    {links.map(link => 

        <LinkCard
            _id={link._id}
            urlName={link.urlName}
            longUrl={link.longUrl}
            shortUrl={link.shortUrl}
            visited={link.visited}

            handleDeleteLink={handleDeleteLink}
      />
  )}   
  </>  
  );
};

export default LinkList;
