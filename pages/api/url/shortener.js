import dbConnect from "../../../libs/dbConnect";
import URL from "../../../models/url.model";
import { nanoid } from "nanoid";
import validUrl from "valid-url";

export default async function handler(req, res) {
  //Connect to Database
  await dbConnect();

  console.log(req.body);

  //Create a new ShortURL
  if (req.method === "POST") {
    const { longUrl } = req.body;
    const baseUrl = "https://link-ly.vercel.app";

    //Check to see if baseURL is a valid URL
    if (!validUrl.isUri(baseUrl)) {
      return res.status(401).json({ msg: "Invalid URL" });
    }
    //Create URL Code
    const urlCode = nanoid(6);

    //Check to see if longURL is a valid URL
    if (validUrl.isUri(longUrl)) {
      try {
        //Find if longURL already exists
        let url = await URL.findOne({ longUrl });
        if (url) {
          //If long url already exists return that URL data
          res.json(url);
        } else {
          //if Long URL doesn't exist, create short URL using  baseURL and short code
          const shortUrl = baseUrl + "/" + urlCode;

          console.log(shortUrl);

          const urlName = "New URL";

          console.log(urlName);

          url = await URL.create({
            urlName: urlName,
            longUrl: longUrl,
            shortUrl: shortUrl,
            urlCode: urlCode,
            visited: 0,
            date: new Date(),
          });

          return res.status(201).json({ url });
        }
      } catch (error) {
        console.error(error);
        res.status(501).json({ Error: "Server Error" });
      }
    }

    //Get all short URL
  } else if (req.method === "GET") {
    let url = await URL.find({});

    res.status(201).json(url);
    //Delete a short URL
  } else if (req.method === "DELETE") {
    let url = await URL.findOne({ _id: req.body._id });

    console.log(url);

    if (url) {
      url = await URL.remove({ _id: req.body._id });
      return res.status(201).json({ msg: "URL Deleted successfully" });
    }

    res.status(404).json({ msg: "Error deleting URL" });
  } else {
    res.json({ msg: `${req.method} is not an accepted method` });
  }
}

// let shortUrl = await URL.findOne({urlCode: req.params.urlCode});

//       console.log(shortUrl.shortUrl)

//         if(urlCode === null) return res.status(404).json({msg: "No URL found"})
//         shortUrl.visited++;
//         shortUrl.save();

//         res.status(200).json(shortUrl);
