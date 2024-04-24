import mongoose from "mongoose";
const friendsSchema = new mongoose.Schema({
    userId: String,
    friendId: String,
},
    { collection: "friends" });

export default friendsSchema;