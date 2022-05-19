import Link from "next/link";
import axios from "axios";
import React, { useState, useEffect } from "react";
import LinkList from "../components/LinkList";
import Footer from "../components/Footer";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Dashboard = () => {
  const [longUrl, setLongUrl] = useState("");
  const [links, setLinks] = useState([]);
  const [searchLink, setSearchLink] = useState("");
  const [visited, setVisited] = useState("");
  const { data: session, status } = useSession();

  console.log(session);

  useEffect(() => {
    const getLink = async () => {
      let allLinks = await axios.get("/api/url/links");

      if (allLinks) {
        setLinks(allLinks.data);

        // console.log(setLinks);

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

    const url = { longUrl };

    let shortLink = await axios.post("/api/url/shortener", url);

    if (shortLink.status === 201) {
      setLongUrl("");
      // console.log(shortLink.data)
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
    return <p>Unauthenticated</p>;
  }

  if (status === "loading") {
    return (
      <div className="bg-blue-100 h-full">
        <div className="flex flex-col items-center justify-center">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-100 h-full">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded lg:w-2/3  md:w-2/2 w-full px-6 m-20">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="my-5 w-full">
              {JSON.stringify(session, null, 2)}
              <div className="relative flex">
                <input
                  type="url"
                  name="longUrl"
                  id="longUrl"
                  value={longUrl}
                  onChange={(e) => setLongUrl(e.target.value)}
                  className="bg-gray-200 border rounded text-sm font-medium leading-none text-gray-800 py-4 w-full pl-3"
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
  );
};
export default Dashboard;
