import dbConnect from "../../../libs/dbConnect";
import URL from "../../../models/url.model";

export default async function handler(req, res) {
    //Connect to Database
    await dbConnect()

    //find  shortUrl

if(req.method === "GET"){

      let urlCode = req.query.id;

      let shortUrl = await URL.findOne({urlCode:urlCode});
      
              if(urlCode === null) return res.status(404).json({msg: "No URL found"})
              
             console.log(`This is ${shortUrl}`)
             shortUrl.visited++;
              
            shortUrl.save();

        res.status(201).json(shortUrl)
    //Delete a short URL
    }
   
    else{
        res.json({msg:`${req.method} is not an accepted method`})
    }

}
