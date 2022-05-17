import React from "react";
import Link from "next/link";

const LinkCard = () => {
  return (



          <div className="bg-white shadow rounded lg:w-2/4  md:w-2/2 w-full mt-10 p-6">
            <p

              className="focus:outline-none text-md font-extrabold leading-6 text-gray-800">
              NextJs- 
            </p>
            <p
              tabindex="0"
              className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
            >
              https://tailwindcss.com/docs/margin#add-margin-to-a-single-side{" "}

            </p>

            <div className="w-full flex items-center justify-between py-5">
              <hr className="w-full bg-gray-400" />

            </div>
            <p
              tabindex="0"
              className="focus:outline-none text-sm font-medium leading-none hover:text-blue-500 text-red-500"
            >
              http://localhost:3000/rPxhZfz{" "}
              
            </p>
            <div className="flex flex-row items-center justify-between">
              <div className="text-gray-500 flex flex-row items-center justify-between">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-copy hover:text-blue-500 text-gray-500 mr-3 mt-3"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <desc>Download more icon variants from https://tabler-icons.io/i/copy</desc>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <rect x="8" y="8" width="14" height="14" rx="2"></rect>
                <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
              </svg>

              </div>
              
              {/* Visited */}
              <div>
              <div className=" mt-2 mr-3 cursor-pointer">
                <button
                role="button"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 px-4 py-3 w-full"
              >
                7 Clicks
              </button>
                </div>
              </div>
            </div>
          </div>
   
  );
};

export default LinkCard;
