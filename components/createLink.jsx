import React from "react";
import Link from "next/link";

const CreateLink = () => {
  return (
          <div className="bg-white shadow rounded lg:w-2/3  md:w-2/2 w-full px-8 m-28">


            <div className="mt-6  w-full">
              <div className="relative flex items-center justify-center">
                <input
                  id="pass"
                  type="text"
                  className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-5 w-full pl-3 mt-2"
                />
                <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                <button
                role="button"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 px-4 py-3 w-full"
              >
                Create Short Link
              </button>
                </div>
              </div>
            </div>
            <div className="mt-8">

            </div>
          </div>
   
  );
};

export default CreateLink;
