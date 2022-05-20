import Link from "next/link";
import axios from "axios";
import React, { useState, useEffect } from "react";
import LinkList from "../components/LinkList";
import Footer from "../components/Footer";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import LinkCard from "../components/LinkCard";
import DashboardNav from "../components/Navbar/DashboardNav";

const Dashboard = () => {
  const [longUrl, setLongUrl] = useState("");
  const [links, setLinks] = useState([]);
  const [searchLink, setSearchLink] = useState("");
  const [visited, setVisited] = useState("");
  const [isLoading, setIsLoading] = useState("False");
  const { data: session, status } = useSession();
  const [error, setError] = useState("hidden");

  useEffect(() => {
    const getLink = async () => {
      let allLinks = await axios.get("/api/url/links");

      if (allLinks) {
        setLinks(allLinks.data);

        console.log(setLinks);

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
      const credentials = { _id };

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

  useEffect(() => {}, [visited]);

  const visitedLink = async (visited) => {
    setVisited(visited + 1);
    console.log(visited);
  };
  // console.log(links);

  if (status === "unauthenticated") {
    return (
      <div className="bg-blue-100 h-screen">
        <div className="flex flex-col items-center justify-center pt-20">
          Unauthenticated
        </div>
      </div>
    );
  }

  if (status === "loading") {
    return (
      <>
        <DashboardNav />
        <div className="bg-blue-100 h-screen">
          <div className="flex flex-col items-center justify-center pt-20">
            Loading...
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <DashboardNav />
      <div className="bg-blue-100 h-screen">
        <div className="flex flex-col items-center justify-center">
          <div className={error}>
            <div
              className="flex items-center bg-red-500 text-white text-sm font-bold px-4 py-3 mt-10 ease-in-out duration-300 "
              role="alert"
            >
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
              </svg>
              <p>Please enter a valid link</p>
            </div>
          </div>
          <div className="bg-white shadow rounded lg:w-2/3  md:w-2/2 w-full px-6 m-20">
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
                        className="focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 text-sm font-semibold leading-none text-white focus:outline-none bg-teal-700 border rounded hover:bg-teal-600 px-4 py-3 w-full"
                      >
                        Create Short Link
                      </button>
                    ) : (
                      <button
                        role="button"
                        className="focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 text-sm font-semibold leading-none text-white focus:outline-none bg-teal-500 border rounded hover:bg-teal-500 px-4 py-3 w-full"
                        disabled
                      >
                        Creating Short Link
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
