import Message from "../models/message.model.js"
import User from "../models/user.model.js"
import cloudinary from "../lib/cloudinary.js"

export const getUserForSidebar = async(req, res) => {
    try {
        const loggedInUserId = req.user._id

        const filteredUser = await User.find({_id : {$ne : loggedInUserId}}).select('-password')
        
        res.status(200).json(filteredUser)
    } catch (error) {
        console.error('Error in getUserForSidebar' , error.message)
        res.status(500).json({error : "Internal Server Error"})
    }
}

export const getMessages = async(req, res) => {
    try {
        const { id : userToChatId} = req.params
        const myId = req.user._id

        const message = await Message.find({
            $or : [
                {serderId : myId , receiverId : userToChatId},
                {serderId : userToChatId , receiverId : myId}
            ]
        })

        res.status(200).json(message)
    } catch (error) {
        console.error('Error in getMessages controller' , error.message)
        res.status(500).json({message : "Internal Server Error"})
    }
}
   
export const sendMessage = async(req, res) => {
    try {
        const {text , image} = req.body
        const {id : receiverId } = req.params
        const senderId = req.user._id
 
        let imageUrl;
        if(image){
            const uploadResponse = await cloudinary.uploader.upload(image)
            imageUrl = uploadResponse.secure_url
        }

        const newMessage = new Message({
            senderId , 
            receiverId,
            text,
            image : imageUrl
        })   

        await newMessage.save()

        //realtime functionality goes here => socket.io

        res.status(201).json(newMessage)
    } catch (error) {
        console.error('Error in sendMessage controller' , error.message)
        res.status(500).json({error : "Internal Server Error"})
    }
}