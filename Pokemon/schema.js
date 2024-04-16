import mongoose from "mongoose";
const pokemonSchema = new mongoose.Schema({
    userId: String,
    species: String,
    name: String,
    gender: {
        type: String,
        enum: ["Male", "Female", "Genderless"],
        default: "Genderless",
    },
    level: {type: Number, min: 1, max: 100},
    shiny: Boolean
},
    { collection: "pokemon" });

export default pokemonSchema;