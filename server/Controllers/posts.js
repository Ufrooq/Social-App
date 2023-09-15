import { postsModel } from "../Models/posts";
import { UserModel } from "../Models/user";

export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await UserModel.find(userId);
    const newPost = await postsModel.create({
      firstName,
      lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });
    const updatedPosts = await postsModel.find();
    res.status(200).json(updatedPosts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const getFeedPosts = async (req, res) => {};
export const getUserPosts = async (req, res) => {};
export const likePost = async (req, res) => {};
