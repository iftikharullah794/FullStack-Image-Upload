const Post = require("../model/post.model");

const {
    uploadImage,
    deleteImage
} = require("../services/storage.service");


// CREATE POST
const createPost = async (req, res) => {

    try {

        const { caption } = req.body;


        // Check image
        if (!req.file) {

            return res.status(400).json({
                success: false,
                message: "Image is required"
            });
        }


        console.log("Image received by Multer");

        console.log({
            originalname: req.file.originalname,
            mimetype: req.file.mimetype,
            size: req.file.size
        });


        // Upload image to ImageKit
        const image = await uploadImage(req.file);


        console.log("ImageKit Result:");
        console.log(image);


        // Save data into MySQL
        const post = await Post.create(
            caption || "",
            image.url,
            image.fileId
        );

        console.log("Post saved to MySQL:");
        console.log(post);
        // Send response
        res.status(201).json({

            success: true,

            message: "Post created successfully",

            data: post

        });

    } catch (error) {

        console.error("Create Post Error:");
        console.error(error);

        res.status(500).json({

            success: false,

            message: "Failed to create post",

            error: error.message

        });
    }
};

// DELETE POST
const deletePost = async (req, res) => {

    try {

        const { id } = req.params;

        // Find post
        const post = await Post.getById(id);

        if (!post) {

            return res.status(404).json({
                success: false,
                message: "Post not found"
            });

        }

        // Delete image from ImageKit
        if (post.image_file_id) {

            await deleteImage(post.image_file_id);

        }

        // Delete post from MySQL
        await Post.delete(id);

        res.status(200).json({

            success: true,
            message: "Post deleted successfully"

        });

    } catch (error) {

        console.error("Delete Post Error:");
        console.error(error);

        res.status(500).json({

            success: false,
            message: "Failed to delete post",
            error: error.message

        });
    }
};


// GET ALL POSTS
const getPosts = async (req, res) => {

    try {

        const posts = await Post.getAll();


        res.status(200).json({

            success: true,

            count: posts.length,

            data: posts

        });

        

    } catch (error) {

        console.error("Get Posts Error:");
        console.error(error);

        res.status(500).json({

            success: false,

            message: "Failed to get posts",

            error: error.message

        });
    }
};


module.exports = {
    createPost,
    getPosts,
    deletePost
};