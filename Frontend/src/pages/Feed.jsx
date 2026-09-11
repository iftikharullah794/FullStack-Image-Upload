// import { useState,useEffect } from "react";
// import axios from "axios";

// function Feed() {


//   const [posts, setPosts] = useState([
//     {
//       _id: "1",
//       image:
//         "https://ik.imagekit.io/wi0rf2adu/IMG-20250729-WA0016_CN6-H-y8CQ.jpg",
//       caption: "This is Iftikhar friends post",
//     },
//     {
//         _id:"3",
//         image:"https://ik.imagekit.io/wi0rf2adu/IMG-20250917-WA0198_4spBUVNDq.jpg",
//         caption:"I love this picture",
//     }
//   ]);

//   return (
//     <section className="flex min-h-screen flex-col items-center bg-gray-100 px-4 py-8">

//       {posts.length > 0 ? (
//         posts.map((post) => (
//           <div
//             key={post._id}
//             className="mb-6 w-full max-w-md overflow-hidden rounded-lg border border-gray-300 bg-white shadow"
//           >
//             <img
//               src={post.image}
//               alt="post"
//               className="h-64 w-full object-cover"
//             />

//             <div className="p-4">
//               <p className="text-gray-700">
//                 {post.caption}
//               </p>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p className="text-gray-600">
//           No posts yet
//         </p>
//       )}

//     </section>
//   );
// }

// export default Feed;


import { useState, useEffect } from "react";
import axios from "axios";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/posts")
      .then((res) => {
        setPosts(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className="min-h-screen bg-gray-800 py-8 px-4">
      <div className="mx-auto w-full max-w-md">

        {posts.length > 0 ? (
          posts.map((post) => (
            <div
              key={post.id}
              className="mb-8 overflow-hidden rounded-lg bg-white p-4 shadow-lg"
            >
              <img
                src={post.image_url}
                alt="post"
                className="w-full rounded-lg object-cover"
              />

              <p className="mt-2 text-sm text-gray-800">
                {post.caption}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-white">
            No posts found
          </p>
        )}

      </div>
    </section>
  );
}

export default Feed;