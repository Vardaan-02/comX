const responseCodes = require("../utils/responseCodes");
const { Post } = require("../models/post.model");

exports.getPendingPosts = async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return responseCodes.clientError.forbidden(res, "You are not authorized to view pending posts");
        }

        const pendingPosts = await Post.find({ status: 'pending' })
            .populate('author', 'name username') 
            .exec();        //listing all the pending posts

        if (!pendingPosts.length) {
            return responseCodes.clientError.notFound(res, "No pending posts found");
        }

        return responseCodes.success.ok(res, pendingPosts, "Pending posts retrieved successfully");

    } catch (error) {
        console.error('Error retrieving pending posts:', error);
        return responseCodes.serverError.internalServerError(res, "Failed to retrieve pending posts");
    }
};

exports.verifyPost = async (req, res) => {
    try {
        const postId = req.params.id;  
        const { verdict } = req.body; 

        if (!postId || !verdict) {
            return responseCodes.clientError.badRequest(res, "Post ID and verdict are required");
        }
        //checking the verdict and assigning the verdict
        if (!['approved', 'disapproved'].includes(verdict)) {
            return responseCodes.clientError.badRequest(res, "Invalid verdict. Must be 'approved' or 'disapproved'");
        }

        if (req.user.role !== 'admin') {
            return responseCodes.clientError.forbidden(res, "You are not authorized to verify posts");
        }

        const post = await Post.findById(postId);

        if (!post) {
            return responseCodes.clientError.notFound(res, "Post not found");
        }

        if (post.status !== 'pending') {
            return responseCodes.clientError.badRequest(res, "Post is already verified");
        }

        post.status = verdict;  // assigning the verdict
        const updatedPost = await post.save();

        return responseCodes.success.ok(res, updatedPost, `Post status updated to ${verdict}`);
        
    } catch (error) {
        console.error('Error verifying post:', error);
        return responseCodes.serverError.internalServerError(res, "Failed to verify post");
    }
};