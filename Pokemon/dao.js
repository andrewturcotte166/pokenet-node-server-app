import model from "./model.js";
export const createPokemon = (pokemon) => {
    delete pokemon._id
    return model.create(pokemon);
}
export const findAllPokemon = () => model.find();
export const findPokemonById = (pokemonId) => model.findById(pokemonId);
export const findPokemonByUser = (userId) => model.find({userId: userId});
export const updatePokemon = (pokemonId, pokemon) => model.updateOne({ _id: pokemonId }, { $set: pokemon });
export const deletePokemon = (pokemonId) => model.deleteOne({ _id: pokemonId });