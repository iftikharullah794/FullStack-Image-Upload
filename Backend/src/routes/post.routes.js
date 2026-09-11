// const express = require("express");
// const multer = require("multer");

// const {
//     createPost,
//     getPosts
// } = require("../controllers/postController");

// const router = express.Router();

// const storage = multer.memoryStorage();

// const upload = multer({
//     storage: storage,
//     limits: {
//         fileSize: 5 * 1024 * 1024
//     },
//     fileFilter: (req, file, cb) => {

//     console.log("================================");
//     console.log("File Name:", file.originalname);
//     console.log("MIME Type:", file.mimetype);
//     console.log("================================");

//     const allowedTypes = [
//         "image/jpeg",
//         "image/jpg",
//         "image/png",
//         "image/webp"
//     ];

//     if (allowedTypes.includes(file.mimetype)) {
//         cb(null, true);
//     } else {
//         cb(new Error(
//             "Only JPEG, PNG, JPG, and WEBP images are allowed"
//         ));
//     }
// }
// });

// router.post(
//     "/",
//     upload.single("image"),
//     createPost
// );

// router.get(
//     "/",
//     getPosts
// );

// module.exports = router;


const express = require("express");
const multer = require("multer");
const path = require("path");

const {
    createPost,
    getPosts,
    deletePost
} = require("../controllers/postController");

const router = express.Router();

const storage = multer.memoryStorage();

const upload = multer({
    storage: storage,

    limits: {
        fileSize: 5 * 1024 * 1024
    },

    fileFilter: (req, file, cb) => {

        console.log("================================");
        console.log("File Name:", file.originalname);
        console.log("MIME Type:", file.mimetype);
        console.log("================================");

        const allowedExtensions = [
            ".jpg",
            ".jpeg",
            ".png",
            ".webp"
        ];

        const extension = path
            .extname(file.originalname)
            .toLowerCase();

        if (allowedExtensions.includes(extension)) {
            cb(null, true);
        } else {
            cb(new Error(
                "Only JPEG, JPG, PNG and WEBP images are allowed"
            ));
        }
    }
});

router.post(
    "/",
    upload.single("image"),
    createPost
);

router.get(
    "/",
    getPosts
);

router.delete(
    "/:id",
    deletePost
);

module.exports = router;