import dbConnect from "../../../libs/dbConnect";
import URL from "../../../models/url.model";

export default async function handler(req, res) {
    //Connect to Database
    await dbConnect()

    //find  shortUrl

if(req.method === "GET"){


      let links = await URL.find({});

      console.log(links)

        res.status(201).json(links)
    //Delete a short URL
    }
    else{
        res.json({msg:`${req.method} is not an accepted method`})
    }

}
