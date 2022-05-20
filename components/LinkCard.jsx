import React, { useState } from "react";
import Link from "next/link";

const LinkCard = ({
  _id,
  urlName,
  longUrl,
  shortUrl,
  visited,
  handleDeleteLink,
  handleVisitedLink,
}) => {
  const handleCopyLink = (e) => {
    navigator.clipboard.writeText(shortUrl);
    alert(`You have copied "${shortUrl}"`);
  };

  return (
    <div className="bg-white shadow rounded lg:w-2/4  md:w-2/2 w-full mt-10 p-5">
      <p className="focus:outline-none text-md font-extrabold leading-6 text-gray-800">
        {/* {urlName} */}
      </p>
      <p className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">
        {longUrl}{" "}
      </p>

      <div className="w-full flex items-center justify-between py-5">
        <hr className="w-full bg-gray-400" />
      </div>
      <a
        onClick={() => handleVisitedLink(visited)}
        href={shortUrl}
        target="_blank"
        rel="noreferrer"
        tabIndex="0"
        className="focus:outline-none text-sm font-medium leading-none hover:text-blue-500 text-red-500"
      >
        {shortUrl}{" "}
      </a>
      <div className="flex flex-row items-center justify-between">
        <div className="text-gray-500 flex flex-row items-center justify-between">
          <svg
            onClick={() => handleCopyLink(shortUrl)}
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-copy hover:text-blue-500 text-gray-500 mr-3 mt-3"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <desc>
              Download more icon variants from https://tabler-icons.io/i/copy
            </desc>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <rect x="8" y="8" width="14" height="14" rx="2"></rect>
            <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
          </svg>

          <svg
            onClick={() => handleDeleteLink(_id)}
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-trash hover:text-red-500 text-gray-500 mr-3 mt-3"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <line x1="4" y1="7" x2="20" y2="7"></line>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
          </svg>
        </div>

        {/* Visited */}
        <div>
          <div className=" mt-2 mr-3 cursor-pointer">
            <button
              role="button"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 text-sm font-semibold leading-none text-white focus:outline-none bg-teal-700 border rounded hover:bg-teal-600 px-4 py-3 w-full"
            >
              {visited} Clicks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
