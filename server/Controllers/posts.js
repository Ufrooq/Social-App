import { postsModel } from "../Models/posts.js";
// import { UserModel } from "../Models/user.js";

export const createPost = async (req, res) => {
  try {
    // const { description, picturePath } = req.body;
    // console.log(description, picturePath);
    console.log(req.body);
    // const user = await UserModel.find(userId);
    // const newPost = await postsModel.create({
    //   firstName,
    //   lastName,
    //   location: user.location,
    //   description,
    //   userPicturePath: user.picturePath,
    //   picturePath,
    //   likes: {},
    //   comments: [],
    // });
    // const updatedPosts = await postsModel.find();
    res.status(201).json("updatedPosts");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getFeedPosts = async (req, res) => {
  try {
    const feedPosts = await postsModel.find();
    res.status(200).json(feedPosts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const userPosts = await postsModel.find({ userId });
    res.status(200).json(userPosts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const likePost = async (req, res) => {
  try {
    const { postId } = req.params; //that's the id of post to be liked or like removed
    const { userId } = req.body; //that's the id of user who is going like or like remove
    const post = await postsModel.find(postId);
    const isLiked = post.likes.get(userId);
    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }
    const updatePost = await postsModel.findByIdAndUpdate(
      postId,
      {
        likes: post.likes,
      },
      { new: true }
    );
    res.status(200).json(updatePost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
