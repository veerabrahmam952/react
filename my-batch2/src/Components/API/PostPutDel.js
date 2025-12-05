import React from "react";

function PostRequestByFetch() {
     const [postTitle, setPostTitle] = React.useState("");
    const [postBody, setPostBody] = React.useState("");

    const handleCreatePost = async () => {
        // Logic for creating a post
        try {
           const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: postTitle,
                body: postBody,
                userId: 1 
            })
           });
           const newPost = await response.json()
           console.log(newPost);
        } catch(e) {
            console.error("Error creating post:", e);
        }
    };

    return(
        <>
          <div>
            <h1>Post, Put, Patch, Delete Requests</h1>
            <h3>Create a new post</h3>
            <input type="text" placeholder="Enter post title"  value={postTitle} onChange={(e) => setPostTitle(e.target.value)}/>
            <input type="text" placeholder="Enter post body" value={postBody} onChange={(e) => setPostBody(e.target.value)}/>
            <button onClick={handleCreatePost}>Create Post</button>

        </div>
        </>
    )
}

export default PostRequestByFetch;