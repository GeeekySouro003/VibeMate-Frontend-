import mongoose from "mongoose";

const CommentSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users", 
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
);

const PostSchema = mongoose.Schema(
  {
    profileId: { type: String, required: true },
    desc: String,
    likes: [],
    comments: [CommentSchema], 
    image: String,
  },
  {
    timestamps: true,
  },
);

const Postmodel = mongoose.model("Posts", PostSchema);
export default Postmodel;
