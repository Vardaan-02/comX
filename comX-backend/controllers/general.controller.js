const responseCodes = require("../utils/responseCodes");
const { Post } = require("../models/post.model");

exports.getAllApprovedPosts = async (req, res) => {
    try {
        const posts = await Post.find({ status: 'approved' })
            .sort({ createdAt: -1 })
            .exec();    // just fin ding all the approved posts to show everyone

        if (!posts.length) {
            return responseCodes.clientError.notFound(res, "No approved posts found");
        }

        return responseCodes.success.ok(res, posts, "Approved posts retrieved successfully");

    } catch (error) {
        console.error('Error retrieving approved posts:', error);
        return responseCodes.serverError.internalServerError(res, "Failed to retrieve approved posts");
    }
};


exports.getPostsByCategory = async (req, res) => {
    try {
        //through this we can get the posts filtered by category
        const { category } = req.params; 

        if (!category) {
            return responseCodes.clientError.badRequest(res, "Category query parameter is required");
        }

        const posts = await Post.find({ category, status: 'approved' })
            .sort({ createdAt: -1 }) 
            .exec();   

        if (!posts.length) {
            return responseCodes.clientError.notFound(res, "No posts found for the specified category");
        }

        return responseCodes.success.ok(res, posts, "Posts retrieved successfully");

    } catch (error) {
        console.error('Error retrieving posts by category:', error);
        return responseCodes.serverError.internalServerError(res, "Failed to retrieve posts");
    }
};



exports.searchApprovedPosts = async (req, res) => {
    try {
        const { search } = req.query; 

        if (!search) {
            return responseCodes.clientError.badRequest(res, "Search query parameter is required");
        }

        const posts = await Post.find({
            status: 'approved',
            $or: [
                { title: { $regex: search, $options: 'i' } },   // this implements search in posts 
                { description: { $regex: search, $options: 'i' } } 
            ]
        })
        .sort({ createdAt: -1 })
        .exec();    // searches on title and description of the post

        if (!posts.length) {
            return responseCodes.clientError.notFound(res, "No approved posts found matching the search query");
        }

        return responseCodes.success.ok(res, posts, "Approved posts retrieved successfully");

    } catch (error) {
        console.error('Error searching approved posts:', error);
        return responseCodes.serverError.internalServerError(res, "Failed to search approved posts");
    }
};