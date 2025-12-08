import React from "react";
import axios from 'axios';

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

function PutrequestByFetch() {
   const [postTitle, setPostTitle] = React.useState("Hi");
    const [postBody, setPostBody] = React.useState("Hello");

    const handleCreatePost = async () => {
        // Logic for creating a post
        try {
            const postId = 2;
           const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: postTitle,
                body: postBody,
                userId: 1 ,
                id: postId
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
            <button onClick={handleCreatePost}>Update Post</button>

        </div>
        </>
    )
}

function PatchRequestByFetch() {
   const [postTitle, setPostTitle] = React.useState("Hi");
    const [postBody, setPostBody] = React.useState("Hello");

    const handleCreatePost = async () => {
        // Logic for creating a post
        try {
            const postId = 2;
           const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: postTitle,
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
            <button onClick={handleCreatePost}>Update Post</button>

        </div>
        </>
    )
}

function DeleteRequestByFetch() {
   const [postTitle, setPostTitle] = React.useState("");
    const [postBody, setPostBody] = React.useState("");

    const handleCreatePost = async () => {
        // Logic for creating a post
        try {
            const postId = 2;
           const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
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
            <button onClick={handleCreatePost}>Delete Post</button>

        </div>
        </>
    )
}

function PostRequestByAxios() {
    const [isLoading, setIsLoading] = React.useState(false);
    const [postTitle, setPostTitle] = React.useState("");
    const [postBody, setPostBody] = React.useState("");

    const handleCreatePost = async () => {
        // Logic for creating a post
        try {
            setIsLoading(true)
           const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                title: postTitle,
                body: postBody,
                userId: 1 
            }, {
                headers: {'Content-Type': 'application/json'},
            });
            setIsLoading(false);
           console.log(response);
        } catch(e) {
           setIsLoading(false);
            console.error("Error creating post:", e);
        }
    };

    if(isLoading) return (<>Loading....</>)

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

function PutrequestByAxios() {
   const [postTitle, setPostTitle] = React.useState("Hi");
    const [postBody, setPostBody] = React.useState("Hello");

    const handleCreatePost = async () => {
        // Logic for creating a post
        try {
            const postId = 2;
           const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                title: postTitle,
                body: postBody,
                userId: 1 ,
                id: postId
            }, {
                headers: {'Content-Type': 'application/json'},
            });
           console.log(response);
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
            <button onClick={handleCreatePost}>Update Post</button>

        </div>
        </>
    )
}

function PatchRequestByAxios() {
    //Todo: Implement pacth request using axios
}

function DeleteRequestByAxios() {
    //TODO: Implement delete request using axios
}

export  {PostRequestByFetch, PostRequestByAxios, PutrequestByFetch, 
    PatchRequestByFetch, DeleteRequestByFetch, PutrequestByAxios};