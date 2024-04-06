import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    region: String,
    favoritePokemon: String,
    favoriteType: String,
    email: String,
    dob: Date,
    role: {
        type: String,
        enum: ["TRAINER", "PROFESSOR", "USER"],
        default: "USER",
    },
},
    { collection: "users" });
export default userSchema;