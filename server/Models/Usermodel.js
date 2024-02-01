import mongoose from "mongoose";

const UserSchema=mongoose.Schema(
    {
        username :{
            type:String,
            required:true
        },
        password :{
            type:String,
            required:true
        },
        firstname :{
            type:String,
            required:true
        },
        middlename:{
            type:String,
            required:true
        },
        lastname:{
            type:String,
            required:true
        },
        isadmin:{
            type:Boolean,
            default:false
        },
        profilePic:String,
        CoverPic:String,
        Description:String,
        livesin:String,
        workplace:String,
        relationship:String,
        followers:[],
        following:[]

    },

    {timestamps:true}
)
const userModel = mongoose.model('Users',UserSchema);

export default userModel