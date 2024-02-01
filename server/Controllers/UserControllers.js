import userModel from "../Models/Usermodel.js";
import bcrypt from  "bcrypt";

export const getUser = async(req,res) =>{
    const id=req.params.id;

    try{

        if(password)
        {
            const salt= await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(password,salt);
        }
        const user=await userModel.findById(id);
        if(user)
        {
            const{password,...otherDetails} = user._doc;
            res.status(200).json(otherDetails);
        }
        else{
            res.status(404).json("No such user exists");
        }

    }
    catch(err){
        res.status(500).json(err);
    }

};

export const updateUser = async(req,res) =>{
    const id=req.params.id;
    const{currentUserid,currentUseradminStatus,password} = req.body;


    if(id===currentUserid || currentUseradminStatus)
{
    try{

        if(password){
            const salt=await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(password, salt);
        }
        const user=await userModel.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(user);
        
    }
    catch(err){
        res.status(500).json(err);

    }
}
else{
    res.status(403).json("Profile does not match!!");
}
};

export const deleteUser = async (req, res) => {
    const id = req.params.id;
  
    const { currentUserId, currentUserAdminStatus } = req.body;
  
    if (currentUserId === id || currentUserAdminStatus) {
      try {
        await userModel.findByIdAndDelete(id);
        res.status(200).json("User deleted successfully");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(403).json("Access Denied! you can only delete your own profile");
    }
  };
// follow profiles
export const followUser = async (req, res) => {
    const id = req.params.id;
  
    const { currentUserId } = req.body;
  
    if (currentUserId === id) {
      res.status(403).json("Action forbidden");
    } else {
      try {
        const followUser = await userModel.findById(id);
        const followingUser = await userModel.findById(currentUserId);
  
        if (!followUser.followers.includes(currentUserId)) {
          await followUser.updateOne({ $push: { followers: currentUserId } });
          await followingUser.updateOne({ $push: { following: id } });
          res.status(200).json("User followed!");
        } else {
          res.status(403).json("User is Already followed by you");
        }
      } catch (error) {
        res.status(500).json(error);
      }
    }
  };

//unfollow 
  export const UnFollowUser = async (req, res) => {
    const id = req.params.id;
  
    const { currentUserId } = req.body;
  
    if (currentUserId === id) {
      res.status(403).json("Action forbidden");
    } else {
      try {
        const followUser = await userModel.findById(id);
        const followingUser = await userModel.findById(currentUserId);
  
        if (followUser.followers.includes(currentUserId)) {
          await followUser.updateOne({ $pull: { followers: currentUserId } });
          await followingUser.updateOne({ $pull: { following: id } });
          res.status(200).json("Profile Unfollowed!");
        } else {
          res.status(403).json("Profile is not followed by you");
        }
      } catch (error) {
        res.status(500).json(error);
      }
    }
  };