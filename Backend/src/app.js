// // const express = require("express");
// // const multer = require("multer");
// // const path = require("path");
// // const postRoutes = require("./Router/postRoutes");


// // const db = require("./config/db");

// // const app = express();

// // app.use(express.json());

// // app.use("/api/posts", postRoutes);

// // // =========================
// // // Multer Storage
// // // =========================

// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, "uploads/");
// //   },

// //   filename: function (req, file, cb) {
// //     const uniqueName =
// //       Date.now() + "-" + Math.round(Math.random() * 1E9);

// //     cb(
// //       null,
// //       uniqueName + path.extname(file.originalname)
// //     );
// //   }
// // });

// // const upload = multer({
// //   storage: storage
// // });


// // // =========================
// // // Home Route
// // // =========================

// // app.get("/", (req, res) => {
// //   res.json({
// //     message: "SnapVault Backend is running"
// //   });
// // });


// // // =========================
// // // POST - Upload Image
// // // =========================

// // app.post("/api/images", upload.single("image"), async (req, res) => {
// //   try {

// //     // Check image
// //     if (!req.file) {
// //       return res.status(400).json({
// //         message: "Image is required"
// //       });
// //     }

// //     // Get caption
// //     const { caption } = req.body;

// //     if (!caption) {
// //       return res.status(400).json({
// //         message: "Caption is required"
// //       });
// //     }

// //     // Save data in MySQL
// //     const [result] = await db.query(
// //       "INSERT INTO images (image, caption) VALUES (?, ?)",
// //       [req.file.filename, caption]
// //     );

// //     res.status(201).json({
// //       message: "Image uploaded successfully",

// //       image: {
// //         id: result.insertId,
// //         filename: req.file.filename,
// //         caption: caption
// //       }
// //     });

// //   } catch (error) {

// //     console.error("UPLOAD Error:", error);

// //     res.status(500).json({
// //       message: "Database error"
// //     });
// //   }
// // });


// // module.exports = app;


// const express = require("express");
// const multer = require("multer");
// const uploadImage = require("./services/storage.service").uploadImage;
// const { createPost } = require("./model/post.model");

// const app = express();

// const upload = multer({ dest: "uploads/" });

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.post("/api/post-create", upload.single("image"), async (req, res) => {
//     try {
//         const caption = req.body?.caption || null;
//         const image = req.file || null;

//         console.log("Caption:", caption);
//         console.log("Image:", image);
//         const result = await uploadImage(image.buffer, image.originalname);

//         const post = await createPost(caption, result);

//         res.status(200).json({
//             success: true,
//             message: "Post data received successfully",
//             data: post
//         });

//     } catch (error) {
//         console.log("Error:", error.message);

//         res.status(500).json({
//             success: false,
//             message: "Post creation failed"
//         });
//     }
// });

// app.listen(5000, () => {
//     console.log("Server running on http://localhost:5000");
// });

// module.exports = app;


const express = require("express");
const postRoutes = require("./routes/post.routes");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "SnapVault Backend is running"
    });
});



module.exports = app;