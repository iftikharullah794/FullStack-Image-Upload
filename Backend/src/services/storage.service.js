// import { ImageKit } from "@imagekit/nodejs";

// const imagekit = new ImageKit({
//   publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
//   privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
//   urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
// });

// async function uploadImage(buffer, originalname) {
//   try {
//     const uploadResponse = await imagekit.upload({
//       file: buffer,
//       fileName: originalname,
//     });

//     return uploadResponse.url;
//   } catch (error) {
//     console.error("Error uploading image:", error);
//     throw error;
//   }
// }

// module.exports = { uploadImage };


// const ImageKit = require("@imagekit/nodejs");

// const imagekit = new ImageKit({
//     privateKey: process.env.IMAGEKIT_PRIVATE_KEY
// });

// const uploadImage = async (file) => {

//     try {

//         console.log("Buffer exists:",!!file.buffer);
//         console.log("Buffer Size:", file.buffer.length);

//         const base64File = file.buffer.toString("base64");
//         const result = await imagekit.files.upload({
//             file: file.buffer,
//             fileName: file.originalname
//         });

//         console.log("ImageKit Upload Successful");

//         return {
//             url: result.url,
//             fileId: result.fileId,
//             name: result.name
//         };

//     } catch (error) {

//         console.error("ImageKit Upload Error:");
//         console.error(error);

//         throw error;
//     }
// };

// module.exports = {
//     uploadImage
// };


const ImageKit = require("@imagekit/nodejs");
const fs = require("fs");
const path = require("path");

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});


// ===============================
// UPLOAD IMAGE
// ===============================
const uploadImage = async (file) => {

    let tempFilePath;

    try {

        const uploadDir = path.join(__dirname, "../../temp");

        // temp folder create
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        // temporary file path
        tempFilePath = path.join(
            uploadDir,
            `${Date.now()}-${file.originalname}`
        );

        // Buffer → temporary file
        fs.writeFileSync(
            tempFilePath,
            file.buffer
        );

        console.log("Temporary file created:", tempFilePath);


        // Upload to ImageKit
        const result = await imagekit.files.upload({

            file: fs.createReadStream(tempFilePath),

            fileName: file.originalname

        });


        console.log("ImageKit Upload Successful");
        console.log("Image URL:", result.url);


        return {

            url: result.url,

            fileId: result.fileId,

            name: result.name

        };


    } catch (error) {

        console.error("ImageKit Upload Error:");
        console.error(error);

        throw error;

    } finally {

        // Delete temporary file
        if (
            tempFilePath &&
            fs.existsSync(tempFilePath)
        ) {

            fs.unlinkSync(tempFilePath);

            console.log(
                "Temporary file deleted"
            );

        }

    }

};


// ===============================
// DELETE IMAGE
// ===============================
const deleteImage = async (fileId) => {

    try {

        console.log(
            "Deleting ImageKit file:",
            fileId
        );


        await imagekit.files.delete(fileId);


        console.log(
            "ImageKit image deleted successfully"
        );


    } catch (error) {

        console.error(
            "ImageKit Delete Error:"
        );

        console.error(error);

        throw error;

    }

};


// ===============================
// EXPORT
// ===============================
module.exports = {

    uploadImage,

    deleteImage

};