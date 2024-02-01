import messageModel from "../Models/MessageModel.js";

export const addMessage=async(req,res) => {
    const{chatId,senderId,text}=req.body;
    const Message=new messageModel(
        {
            chatId,senderId,text
        }
    );
    try{
        const result = await Message.save();
        res.status(200).json(result);

    }
    catch(err)
    {
        res.status(500).json(err);

    }
}

export const getMessage = async (req, res) => {
    const { chatId } = req.params;
    try {
      const result = await messageModel.find({ chatId });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  };