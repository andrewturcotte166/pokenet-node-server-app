import * as dao from "./dao.js";

export default function FriendRoutes(app) {
    const createFriend = async (req, res) => {
        const friend = await dao.createFriend(req.body);
        res.json(friend);
    };
    const deleteFriendship = async (req, res) => {
        const status = await dao.deleteFriend(req.params.friendName);
        res.json(status);
    };
    const findAllFriendships = async (req, res) => {
        const friends = await dao.findAllFriendships();
        res.json(friends);
    };
    const findFriendshipByUser = async (req, res) => {
        const { userName } = req.params;
        const friends = await dao.findFriendshipByUser(userName);
        res.json(friends);
    };
    const updateFriendship = async (req, res) => {
        const { friendName } = req.params;
        const status = await dao.updateFriend(friendName, req.body);
        res.json(status);
    };
    app.post("/api/friends", createFriend);
    app.get("/api/friends", findAllFriendships);
    app.get("/api/friends/user/:userName", findFriendshipByUser);
    app.put("/api/friends/:friendName", updateFriendship);
    app.delete("/api/friends/:friendName", deleteFriendship);
}