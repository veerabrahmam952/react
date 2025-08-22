import axios from "axios";
import React from "react";

function PostPutPatchDel() {
    const [postTitle, setPostTitle] = React.useState("");
    const [postBody, setPostBody] = React.useState("");

    const handleCreatePost = async () => {
        // Logic for creating a post
        try {
           const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: postTitle,
                body: postBody,
                userId: 1 // Assuming a userId of 1 for the example
            })
           });
           const newPost = await response.json()
           console.log(newPost);
        } catch(e) {
            console.error("Error creating post:", e);
        }
    };

    const handleUpdatePostPUT = async() => {
        try {
          let postId = 1;
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: postId,
                title: 'Update Title',
                body: 'Update Post',
                userId: 1
            })
          });
          const updatedPost = await response.json();
          console.log(updatedPost);
        } catch(e) {
            console.error("Error updating post:", e);
        }
    };

    const handleUpdatePostPatch = async () => {
        try {
            let postId = 1;
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                method: 'PATCH',
                headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Update Title',
            })
          });
          const updatedPost = await response.json();
          console.log(updatedPost);
        } catch(e) {
            console.error("Error updating post:", e);
        }
    };

    const handleDeletePost = async () => {
        // Logic for deleting a post
        try{
          let postId = 100;
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'DELETE'
          })
          const deletedPost = await response.json();
          console.log(deletedPost);
        } catch(e) {
            console.error("Error deleting post:", e);
        }
    };

    return (
        <div>
            <h1>Post, Put, Patch, Delete Requests</h1>
            <h3>Create a new post</h3>
            <input type="text" placeholder="Enter post title"  value={postTitle} onChange={(e) => setPostTitle(e.target.value)}/>
            <input type="text" placeholder="Enter post body" value={postBody} onChange={(e) => setPostBody(e.target.value)}/>
            <button onClick={handleCreatePost}>Create Post</button>

            <h3>Update an existing post PUT</h3>
            <button onClick={handleUpdatePostPUT}>Update Post PUT</button>

            <h3>Update an existing post using patch</h3>
            <button onClick={handleUpdatePostPatch}>Update Post Patch</button>

            <h3>Delete Post</h3>
            <button onClick={handleDeletePost}>Delete Post</button>

        </div>
    );
}

function PostPutPatchDelAxios() {
    const [postTitle, setPostTitle] = React.useState("");
    const [postBody, setPostBody] = React.useState("");

    const handleCreatePost = async ()=> {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                title: postTitle,
                body: postBody,
                userId: 1
            }, {
                headers: {'Content-Type': 'application/json'},
            });
            console.log(response.data);
        } catch(e) {
            console.error('Error on creation post', e)
        }
    }

    const handleUpdatePostPUT = async () => {
        
    }

    const handleUpdatePostPatch = async () => {
       
    }

    const handleDeletePost = async () => {
        
    }

    return(
        <div>
            <h1>Post, Put, Patch, Delete Requests</h1>
            <h3>Create a new post</h3>
            <input type="text" placeholder="Enter post title"  value={postTitle} onChange={(e) => setPostTitle(e.target.value)}/>
            <input type="text" placeholder="Enter post body" value={postBody} onChange={(e) => setPostBody(e.target.value)}/>
            <button onClick={handleCreatePost}>Create Post</button>

            <h3>Update an existing post PUT</h3>
            <button onClick={handleUpdatePostPUT}>Update Post PUT</button>

            <h3>Update an existing post using patch</h3>
            <button onClick={handleUpdatePostPatch}>Update Post Patch</button>

            <h3>Delete Post</h3>
            <button onClick={handleDeletePost}>Delete Post</button>

        </div>
    )
}

export {PostPutPatchDel, PostPutPatchDelAxios};