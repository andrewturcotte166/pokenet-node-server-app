import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("PokemonModel", schema);
export default model;