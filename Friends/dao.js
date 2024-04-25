import model from "./model.js";
export const createFriend = ({friendName, userName}) => {
    return model.create({friendName: friendName, userName: userName});
}
export const findAllFriendships = () => model.find();
export const findFriendshipById = (friendName) => model.findById(friendName);
export const findFriendshipByUser = (userName) => model.find({userName: userName});
export const updateFriendship = (friendName, friend) => model.updateOne({ _id: friendName }, { $set: friend });
export const deleteFriendship = (friendName) => model.deleteOne({ _id: friendName });