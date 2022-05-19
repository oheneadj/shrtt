import React, { useState } from "react";
import Link from "next/link";
import LinkCard from "../components/LinkCard"

const LinkList = ({ links}) => {

    const handleCopyLink = e => {
      navigator.clipboard.writeText(shortUrl);
      alert(`You have copied "${shortUrl}"`);
    }



  return (<>
    {links.map(link => 

        <LinkCard
id={link._id}
          urlName={link.urlName}
          longUrl={link.longUrl}
          shortUrl={link.shortUrl}
visited={link.visited}
          // handleDeleteNote={handleDeleteNote}
      />
  )}   
  </>  
  );
};

export default LinkList;
