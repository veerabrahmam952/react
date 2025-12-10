import React, { useEffect, useState } from "react";

function UseEffect() {
    const [count, setCount] = useState(0);

    useEffect(()=> {
        console.log(`Count now ${count}`);
    }, [count])

    return (
        <>
         <p> Count: {count}</p>
         <button onClick={()=> setCount(prev=> prev + 1)}>Increment</button>
        </>
    )
}

function PostFetcher() {
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState('1');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log("Fetching posts...");
        if( query) {
           const fetchPosts = async () => {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${query}`);
                const data = await response.json();
                setTimeout(()=> {
                  setPosts([data]);
                    console.log("Posts fetched:", posts);
                    setLoading(false);
                }, 3000)
                
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


function UseEffectTimeInterval() {
    const [seconds, setSeconds] = useState(0);

    useEffect(()=> {
        console.log('Setting up timer');

        const intervalId = setInterval(()=> {
            setSeconds(prev => prev +1);
        }, 1000);
        

        return () => {
            console.log('Clean up');
            clearInterval(intervalId)
        }

    }, [])

    return (
        <>
         <p> seconds: {seconds}</p>
         {/* <a href="/blala">Navigate</a> */}
        </>
    )
}

export {UseEffect, PostFetcher, UseEffectTimeInterval};