import userModel from "../Models/Usermodel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const regUser=async(req,res) =>{
    
    const salt=await bcrypt.genSalt(10); //salt is basically for hashing the password
    const hashedpwd=await bcrypt.hash(req.body.password,salt);
    req.body.password = hashedpwd;

    const newUser=new userModel(req.body);
    const {username}=req.body;

    try{

        const oldUser =await userModel.findOne({username})
        if(oldUser){
            return res.status(400).json({message:"Username is already in use"})
        }
        const user=await newUser.save();
        const token=jwt.sign({
            username:user.username,id:user._id
        },process.env.JWT_KEY,{expiresIn:"1h"})
        res.status(200).json({user,token});

    }
    catch(err)
    {
        res.status(500).json({meessage:err.meessage});

    }
};


export const logUser=async(req,res) =>{
    const{username,password}=req.body;

    try{
        const user=await userModel.findOne({username});

        if(user)
        {
            const validation=await bcrypt.compare(password,user.password)
           
            if(!validation)
            {
                res.status(400).json({message:"Wrong password"});
            }
        }
        else{
            const token=jwt.sign({
                username:user.username,id:user._id
            },process.env.JWT_KEY,{expiresIn:"1h"})
            res.status(200).json({user,token})
        }

    }
    catch(err)
    {
       res.status(500).json({message:err.message})

    }
}