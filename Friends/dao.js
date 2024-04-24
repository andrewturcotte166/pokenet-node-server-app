import model from "./model.js";
export const createFriend = (friendId, userId) => {
    return model.create({friendId: friendId, userId: userId});
}
export const findAllFriendships = () => model.find();
export const findFriendshipById = (friendId) => model.findById(friendId);
export const findFriendshipByUser = (userId) => model.find({userId: userId});
export const updateFriendship = (friendId, friend) => model.updateOne({ _id: friendId }, { $set: friend });
export const deleteFriendship = (friendId) => model.deleteOne({ _id: friendId });