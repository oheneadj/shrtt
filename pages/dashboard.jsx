// import Link from "next/link";
import axios from "axios";
import React, { useState, useEffect } from "react";
import LinkList from "../components/LinkList";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import DashboardNav from "../components/Navbar/DashboardNav";

const Dashboard = () => {

  useEffect(() => {
    if(authorized === ""){
      router.push("/login");
    }
  }, [])


  const [longUrl, setLongUrl] = useState("");
  const [links, setLinks] = useState([]);
  const [searchLink, setSearchLink] = useState("");
  const [visited, setVisited] = useState("");
  const [isLoading, setIsLoading] = useState("False");
  const router = useRouter();
  const {user, authorized, isLoggedIn} = useContext(UserContext);


//check if user us logged in




  useEffect(() => {
    const getLink = async () => {
      let allLinks = await axios.get("/api/url/links");

      if (allLinks) {
        setLinks(allLinks.data);

        // console.log(links);
      }

      console.log("login error");
    };

    // if (allLinks) {
    // 	setLinks(allLinks);
    // }
    getLink();
  }, [longUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading("True");

    const url = { longUrl };

    try {
      let shortLink = await axios.post("/api/url/shortener", url);

      if (shortLink.status === 201) {
        setIsLoading("False");
        setLongUrl("");
        // console.log(shortLink.data)
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deleteLink = async (_id) => {
    try {
      console.log(_id);

      let allLinks = await axios.delete("/api/url/shortener", {
        data: {
          _id,
        },
      });

      // console.log(allLinks);

      if (allLinks.status === 201) {
        // console.log(allLinks.data);
        alert(`Link deleted successfully`);

        const newLinks = links.filter((link) => link._id !== _id);
        setLinks(newLinks);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {visitedLink}, [visited]);

  const visitedLink = async (visited) => {
    setVisited(visited++);
    console.log(visited);
  };
  // console.log(links);
  return (
    <>
      <DashboardNav />
      <div className="bg-blue-100 p-3 h-screen">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white shadow rounded lg:w-2/3  md:w-2/2 w-full px-4 m-20">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="my-5 w-full">
                <div className="relative flex">
                  <input
                    required
                    type="url"
                    name="longUrl"
                    id="longUrl"
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                    className="bg-gray-200 border rounded text-sm font-medium leading-none text-gray-800 py-4 w-full pl-3"
                  />
                  <div className="absolute right-0 my-2 mr-3 cursor-pointer">
                    {isLoading === "False" ? (
                      <button
                        role="button"
                        className="focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 text-sm font-semibold leading-none text-white focus:outline-none bg-teal-700 border rounded hover:bg-teal-600 px-4 py-3 w-full">
                        Create
                      </button>
                    ) : (
                      <button
                        role="button"
                        className="focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 text-sm font-semibold leading-none text-white focus:outline-none bg-teal-500 border rounded hover:bg-teal-500 px-4 py-3 w-full">
                        Creating...
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="lg:w-1/3  md:w-1/2 w-full px-6">
            <div className="my-5 w-full">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="relative flex items-center justify-center">
                  <input
                    placeholder="Search for a link..."
                    type="url"
                    name="longUrl"
                    id="longUrl"
                    onChange={(e) => setSearchLink(e.target.value)}
                    className="bg-white border rounded text-sm font-medium leading-none text-gray-900 py-4 w-full pl-3 mt-2"
                  />
                </div>
              </form>
            </div>
          </div>

          <LinkList
            links={
              links &&
              links.filter((link) =>
                link.longUrl.toLowerCase().includes(searchLink)
              )
            }
            handleDeleteLink={deleteLink}
            handleVisitedLink={visitedLink}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Dashboard;