const responseCodes = require("../utils/responseCodes");
const { Post } = require("../models/post.model");
const { RegularUser } = require("../models/user.model");

exports.uploadImages = async (req, res) => {
    try {
        const { title, description, links, category } = req.body;
        // checking mandatory fields
        if (!title || !description || !category) {  
            return responseCodes.clientError.badRequest(res, "Title/Description/Category not found");
        }

        const author = req.user.id;
        const files = req.files;
        // files are must for post
        if (!files || files.length === 0) {
            return responseCodes.clientError.badRequest(res, "No files uploaded");
        }


        const fileUrls = files.map(file => file.path);
        
        const newPost = new Post({
            title,
            description,
            images: fileUrls || [],
            files: links || [],
            author,
            category
        });

        const savedPost = await newPost.save(); // creating a new post

        const updatedUser = await RegularUser.findOneAndUpdate(
            {_id: author},
            { $push: { posts: savedPost._id } },
            { new: true }
        );  // pushing post in user posts array

        if (!updatedUser) {
            console.error('User not found or update failed');
            return responseCodes.clientError.notFound(res, "User not found");
        }

        return responseCodes.success.ok(res, savedPost, "Post uploaded successfully");     // returning new post
        
    } catch (error) {
        console.error('Upload error:', error);
        return responseCodes.serverError.internalServerError(res, "File upload failed");
    }
}

exports.viewProfile = async (req, res) => {
    try {
        const userId = req.params.id; 

        if (!userId) {
            return responseCodes.clientError.badRequest(res, "User ID is required");
        }

        const user = await RegularUser.findById(userId)
            .populate({
                path: 'posts',
                select: 'title description images files category', 
            })
            .exec();

        if (!user) {
            console.error('User not found');
            return responseCodes.clientError.notFound(res, "User not found");
        }

        user.password = undefined;  // removing sensitive information

        return responseCodes.success.ok(res, user, "User profile retrieved successfully");
        
    } catch (error) {
        console.error('Error retrieving user profile:', error);
        return responseCodes.serverError.internalServerError(res, "Failed to retrieve user profile");
    }
}


exports.deletePost = async (req, res) => {
    try {
        const postId = req.params.id; 
        const authorId = req.user.id; 
        if (!postId) {
            return responseCodes.clientError.badRequest(res, "Post ID is required");
        }
        
        const post = await Post.findById(postId);
        
        // checking if post exists
        if (!post) {
            console.error('Post not found');
            return responseCodes.clientError.notFound(res, "Post not found");
        }

        // checking if user is authorized
        if (!post.author.equals(authorId)) {
            return responseCodes.clientError.forbidden(res, "You are not authorized to delete this post");
        }

        await Post.findByIdAndDelete(postId);   // deleting post

        await RegularUser.findByIdAndUpdate(   
            authorId,
            { $pull: { posts: postId } }
        );  // deleting post from user's post array as well

        return responseCodes.success.ok(res, null, "Post deleted successfully");
        
    } catch (error) {
        console.error('Error deleting post:', error);
        return responseCodes.serverError.internalServerError(res, "Failed to delete post");
    }
}


exports.getUserPostsByStatus = async (req, res) => {
    try {
        // because we can see for any status taking status through query params
        const userId = req.user.id; 
        const { status } = req.query;

        if (!['pending', 'approved', 'disapproved'].includes(status)) {
            return responseCodes.clientError.badRequest(res, "Invalid status. Must be 'pending', 'approved', or 'disapproved'");
        }

        const posts = await Post.find({ author: userId, status })
            .sort({ createdAt: -1 }) 
            .exec();

        if (!posts.length) {
            return responseCodes.clientError.notFound(res, "No posts found with the specified status");
        }

        return responseCodes.success.ok(res, posts, "Posts retrieved successfully");

    } catch (error) {
        console.error('Error retrieving user posts:', error);
        return responseCodes.serverError.internalServerError(res, "Failed to retrieve posts");
    }
};
