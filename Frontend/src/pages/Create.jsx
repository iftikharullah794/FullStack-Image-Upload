// import React from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Create() {
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formData = new FormData(e.target);
//         const data = {
//             image: formData.get("image"),
//             caption: formData.get("caption")
//         };
//         axios
//             .post("http://localhost:5000/api/posts", data)
//             .then((res) => {
//                 console.log(res);
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     };  

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

//       <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">

//         {/* Heading */}
//         <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">
//           Create post
//         </h1>

//         <form className="space-y-4">

//           {/* Image */}
//           <div>
//             <input
//               type="file"
//               name="image"
//               accept="image/*"
//               className="w-full border border-gray-300 rounded-md px-2 py-2 text-sm"
//             />
//           </div>

//           {/* Caption */}
//           <div>
//             <input
//               type="text"
//               name="caption"
//               placeholder="Enter caption"
//               className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-green-500"
//             />
//           </div>

//           {/* Button */}
//           <button
//             type="submit"
//             className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-md transition"
//           >
//             Submit
//           </button>

//         </form>

//       </div>

//     </div>
//   );
// }

// export default Create;


import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        axios
            .post("http://localhost:5000/api/posts", formData)
            .then((res) => {
                // Post successfully created
                navigate("/feed");
            })
            .catch((error) => {
                console.error("Create Post Error:", error);
            });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">

                <h1 className="text-2xl font-bold text-center mb-6">
                    Create Post
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    {/* Image */}
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        required
                        className="w-full border border-gray-300 rounded-md p-2"
                    />

                    {/* Caption */}
                    <input
                        type="text"
                        name="caption"
                        placeholder="Enter caption"
                        required
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md"
                    >
                        Submit
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Create;