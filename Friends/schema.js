import mongoose from "mongoose";
const friendsSchema = new mongoose.Schema({
    userName: String,
    friendName: String,
},
    { collection: "friends" });

export default friendsSchema;