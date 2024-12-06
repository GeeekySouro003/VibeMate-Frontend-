import Postmodel from "../Models/PostModel.js";
import mongoose from "mongoose";
import userModel from "../Models/Usermodel.js";



export const crenewPost= async(req,res) =>{
    const newpost=new Postmodel(req.body);
    try{
        await newpost.save();
        res.status(200).json(newpost)

    }
    catch(err) {
        res.status(500).json(err);


    }
}

//get a post

export const getPost = async(req, res) => {
    const id=req.params.id;
    try{
        const Post=await Postmodel.findById(id);
        res.status(200).json(Post);

    }
    catch(err) {

        res.status(500).json(err);
    }
}

//update a post

export const updatePost = async(req, res) => {
    const pstId=req.params.id;
    const {userId}=req.body;

    try{
        const Post=await Postmodel.findById(pstId);
        if(Post.userId===userId)
        {
            await Post.updateOne({$set :req.body});
            res.status(200).json("Post updated successfully");
        }
        else{
            res.status(403).json("Action forbidden");
        }

    }
    catch(err) {
        res.status(500).json(err);

    }
}

//delete a post

export const deletePost = async(req, res) => {
    const id=req.params.id;
    const{userId}=req.body;

    try{
        const Post=await Postmodel.findById(id);
        if(Post.userId===userId)
        {
            await Post.deleteOne();
            res.status(200).json("Post removed successfully");
        }
        else{
            res.status(403).json("Action forbidden");
        }
       
}
catch(err) {
    res.status(500).json(err);
}
}

//like dislike a post
export const likePost = async (req, res) => {
    const id = req.params.id;
    const { userId } = req.body;
  
    try {
      const post = await Postmodel.findById(id);
      if (!post.likes.includes(userId)) {
        await post.updateOne({ $push: { likes: userId } });
        res.status(200).json("UnLiked a Post");
      } else {
        await post.updateOne({ $pull: { likes: userId } });
        res.status(200).json("Liked a Post");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };


  //comment a post

  export const commentPost = async (req, res) => {
    const postId = req.params.id;
    const { userId, text } = req.body;
  
    try {
      // Find the post by ID
      const post = await Postmodel.findById(postId);
  
      // Assuming userId is the user who is commenting
      const comment = {
        userId,
        text,
      };
  
      // Add the comment to the post's comments array
      post.comments.push(comment);

      await post.save();
  
      res.status(200).json("Comment added successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  };
//get post timeline

export const timeline = async (req, res) => {
    const userId=req.params.id;
    try {
        const currentUserPosts = await Postmodel.find({ userId: userId });
        const followingPosts = await userModel.aggregate([
          {
            $match: {
              _id: new mongoose.Types.ObjectId(userId),
            },
          },
          {
            $lookup: {
              from: "posts",
              localField: "following",
              foreignField: "userId",
              as: "followingPosts",
            },
          },
          {
            $project: {
              followingPosts: 1,
              _id: 0,
            },
          },
        ]);
    
        res
          .status(200)
          .json(currentUserPosts.concat(...followingPosts[0].followingPosts)
          .sort((a,b)=>{
              return b.createdAt - a.createdAt;
          })
          );
      } catch (error) {
        res.status(500).json(error);
      }
    };