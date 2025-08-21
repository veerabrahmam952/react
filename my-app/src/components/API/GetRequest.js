import React, { useEffect } from "react";
import axios from "axios";

function GetRequest() {
    const [posts, setPosts] = React.useState([]);
    const [tempPosts, setTempPosts] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState("");
    const [loading, setLoading] = React.useState(true);

    useEffect(()=> {
        const fetchPosts = async() => {
            try {
                const id = searchTerm ? searchTerm : 1; // Default to 1 if no search term
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                if(!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data);
                setPosts(data)
                setTempPosts(data);
                setLoading(false);
            } catch(e) {
                console.error("Error fetching posts:", e);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, [searchTerm])

    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        if(!searchTerm) {
            setTempPosts(posts);
            return;
        }
        const filteredPosts = posts.filter(post => post.id === parseInt(searchTerm));
        setTempPosts(filteredPosts);
    }

    if(loading) return <div>Loading...</div>;

    return (
        <>
        <input type="text" placeholder="Search posts..."  onChange={handleSearch}/>
         <h1>Posts</h1>
         <ul>
            {tempPosts.map(post => (
                <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </li>
            ))}
         </ul>
         //Search functionality can be added here
         
        </>
    )
}

function AxiosGetRequest() {
    const [posts, setPosts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(()=> {
        const fetchPosts = async() => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                console.log(response.data);
                setPosts(response.data);
            } catch(e) {
                console.error("Error fetching posts:", e);
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);

    if(loading) return <div>Loading...</div>;
    return (
        <>
         <h1>Posts</h1>
         <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </li>
            ))}
         </ul>
        </>
    )
}

export {GetRequest, AxiosGetRequest};