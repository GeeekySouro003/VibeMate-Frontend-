import mongoose from "mongoose";

const ChatSchemma = new mongoose.Schema (
    {
        members : {
            type:Array,

        },
    },

    {
        timestamps:true,
    }
);


const Chatmodel=mongoose.model('Chat',ChatSchemma);
export default Chatmodel;