import mongoose from "mongoose";
// Link_Name: required, string
// LongURL: required, string
// ShortURL:

const URLSchema = new mongoose.Schema(
  {
    user:{type: mongoose.Schema.Types.ObjectId,
         ref:'User'},
    urlName: {
      type: String,
      required: true,
    },
    longUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
    },
    urlCode: {
      type: String,
      required: true,
    },
    visited: {
      type: Number,
      required: true,
    },
    dateCreated: Date,
  },

  {
    timestamps: true,
  }
);

export default mongoose.models.URL || mongoose.model("URL", URLSchema);
