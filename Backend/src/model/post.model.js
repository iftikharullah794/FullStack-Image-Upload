// const db = require("../config/db");

// const Post = {
//     // Create new post
//     // create: async (caption, imageUrl) => {
//     //     const [result] = await db.execute(
//     //         `INSERT INTO posts (caption, image_url)
//     //    VALUES (?, ?)`,
//     //         [caption, imageUrl]
//     //     );

//     //     return {
//     //         id: result.insertId,
//     //         caption,
//     //         image_url: imageUrl
//     //     };
//     // },    

//      try {
//     console.log("========== POST DATA ==========");

//     console.log("Caption:", req.body.caption);
//     console.log("Image:", req.file);

//     console.log("================================");

//     res.status(200).json({
//       message: "Data received successfully",
//       caption: req.body.caption,
//       image: req.file ? req.file.originalname : null
//     });

//   } catch (error) {
//     console.log("Error:", error.message);

//     res.status(500).json({
//       message: "Server error"
//     });
//   }
// };

//     // Get all posts
//     getAll: async () => {
//         const [rows] = await db.execute(
//             `SELECT * FROM posts ORDER BY id DESC`
//         );

//         return rows;
//     },

//     // Get post by ID
//     getById: async (id) => {
//         const [rows] = await db.execute(
//             `SELECT * FROM posts WHERE id = ?`,
//             [id]
//         );

//         return rows[0];
//     },

//     // Delete post
//     delete: async (id) => {
//         const [result] = await db.execute(
//             `DELETE FROM posts WHERE id = ?`,
//             [id]
//         );

//         return result;
//     }
// };

// module.exports = Post;


// const db = require("../config/db");

// const createPost = async (caption, image) => {
//     try {
//         console.log("========== POST CREATE ==========");
//         console.log("Caption:", caption);
//         console.log("Image:", image);
//         console.log("=================================");

//         return {
//             caption: caption || null,
//             image: image || null
//         };

//     } catch (error) {
//         console.log("Post Create Error:", error.message);
//         throw error;
//     }
// };

// module.exports = {
//     createPost
// };


const db = require("../config/db");

const Post = {

    // CREATE POST
    create: async (caption, imageUrl, imageFileId) => {

        const [result] = await db.execute(
            `
            INSERT INTO posts
            (caption, image_url, image_file_id)
            VALUES (?, ?, ?)
            `,
            [
                caption,
                imageUrl,
                imageFileId
            ]
        );

        return {
            id: result.insertId,
            caption: caption,
            image_url: imageUrl,
            image_file_id: imageFileId
        };
    },

    // GET ONE POST//
    getById: async (id) => {

        const [rows] = await db.execute(
            `
            SELECT *
            FROM posts
            WHERE id = ?
            `,
            [id]
        );

        return rows[0];
    },

    // GET ALL POSTS
    getAll: async () => {

        const [rows] = await db.execute(
            `
            SELECT *
            FROM posts
            ORDER BY created_at DESC
            `
        );

        return rows;
    },

    //DELETE POST//
    delete: async (id) => {

        const [result] = await db.execute(
            `
            DELETE FROM posts
            WHERE id = ?
            `,
            [id]
        );

        return result;
    }

};

module.exports = Post;