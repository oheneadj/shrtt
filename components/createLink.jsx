import React, { useState } from "react";
import Link from "next/link";


const CreateLink = ({handleCreateLink}) => {


  const [longUrl, setLongUrl] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = { email, password };


    let user = await axios.post("/api/auth/login", credentials);



    if(user){

      localStorage.setItem('user', JSON.stringify(user.data));
      return router.push("/dashboard")
    }

    console.log("login error")
  };



  return (
          <div className="bg-white shadow rounded lg:w-2/3  md:w-2/2 w-full px-6 m-20">
            <div className="my-5 w-full">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="relative flex items-center justify-center">
                <input
                  id="pass"
                  type="text"
                  className="bg-gray-200 border rounded text-md font-medium leading-none text-gray-800 py-4 w-full pl-3"
                />
                <div className="absolute right-0 my-2 mr-3 cursor-pointer">
                <button
                role="button"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 px-4 py-3 w-full"
              >
                Create Short Link
              </button>
                </div>
              </div>
              </form>
            </div>
          </div>
  );
};

export default CreateLink;
