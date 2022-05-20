import dbConnect from "../../../libs/dbConnect";
import URL from "../../../models/url.model";

export default async function handler(req, res) {
  //Connect to Database
  await dbConnect();

  //find  shortUrl

  if (req.method === "GET") {
    let links = await URL.find({});

    res.status(201).json(links);
  } else {
    res.json({ msg: `${req.method} is not an accepted method` });
  }
}
