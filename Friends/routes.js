import * as dao from "./dao.js";

export default function FriendRoutes(app) {
    const createFriend = async (req, res) => {
        const friend = await dao.createFriend(req.body);
        res.json(friend);
    };
    const deleteFriend = async (req, res) => {
        const status = await dao.deleteFriend(req.params.friendId);
        res.json(status);
    };
    const findAllFriends = async (req, res) => {
        const friends = await dao.findAllFriends();
        res.json(friends);
    };
    const findFriendByUser = async (req, res) => {
        const { userId } = req.params;
        const friends = await dao.findFriendByUser(userId);
        res.json(friends);
    };
    const updateFriend = async (req, res) => {
        const { friendId } = req.params;
        const status = await dao.updateFriend(friendId, req.body);
        res.json(status);
    };
    app.post("/api/friends", createFriend);
    app.get("/api/friends", findAllFriends);
    app.get("/api/friends/user/:userId", findFriendByUser);
    app.put("/api/friends/:friendId", updateFriend);
    app.delete("/api/friends/:friendId", deleteFriend);
}