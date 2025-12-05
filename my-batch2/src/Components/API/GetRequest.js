import React, {useState, useEffect} from "react";
import axios from 'axios';

function GetRequestByFetch() {
    const [query, setQuery] = useState('1');
    const [posts, setPosts] = useState([]);
    
        useEffect(() => {
            console.log("Fetching posts...");
            if( query) {
               const fetchPosts = async () => {
                    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${query}`);
                    const data = await response.json();
                    setPosts([data]);
                    console.log("Posts fetched:", posts);
                }
                fetchPosts();
            }
            
        }, [query]); //[] means this effect runs only once after the initial render
    
        return (
            <div>
                <h2>Posts</h2>
                <input 
                    type="text" 
                    placeholder="Enter post ID" 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)}
                />
                {posts && posts.length > 0 ? (
                    <ul>
                        {posts.map(post => (
                            <li key={post.id}>{post.title}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No posts found</p>
                )}
            </div>
        );
}

function GetRequestByAxios() {
    const [query, setQuery] = useState('1');
    const [posts, setPosts] = useState([]);
    
        useEffect(() => {
            console.log("Fetching posts...");
            if( query) {
               const fetchPosts = async () => {
                    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query}`);
                    console.log(response);
                    setPosts([response.data]);
                    console.log("Posts fetched:", posts);
                }
                fetchPosts();
            }
            
        }, [query]); //[] means this effect runs only once after the initial render
    
        return (
            <div>
                <h2>Posts</h2>
                <input 
                    type="text" 
                    placeholder="Enter post ID" 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)}
                />
                {posts && posts.length > 0 ? (
                    <ul>
                        {posts.map(post => (
                            <li key={post.id}>{post.title}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No posts found</p>
                )}
            </div>
        );
}



export {GetRequestByFetch, GetRequestByAxios};