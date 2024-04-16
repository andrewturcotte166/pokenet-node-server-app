import * as dao from "./dao.js";
export default function UserRoutes(app) {
    const createPokemon = async (req, res) => {
        const pokemon = await dao.createPokemon(req.body);
        res.json(pokemon);
    };
    const deletePokemon = async (req, res) => {
        const status = await dao.deletePokemon(req.params.pokemonId);
        res.json(status);
    };
    const findAllPokemon = async (req, res) => {
        const pokemon = await dao.findAllPokemon();
        res.json(pokemon);
    };
    const findPokemonByUser = async (req, res) => {
        const { userId } = req.params;
        const pokemon = await dao.findPokemonByUser(userId);
        res.json(pokemon);
    };
    const updatePokemon = async (req, res) => {
        const { pokemonId } = req.params;
        const status = await dao.updateUser(pokemonId, req.body);
        res.json(status);
    };
    app.post("/api/pokemon", createPokemon);
    app.get("/api/pokemon", findAllPokemon);
    app.get("/api/pokemon/user/:userId", findPokemonByUser);
    app.put("/api/pokemon/:pokemonId", updatePokemon);
    app.delete("/api/pokemon/:pokemonId", deletePokemon);
}
