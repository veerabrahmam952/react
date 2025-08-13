import React from "react";

function Effect() {
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState('');

    React.useEffect(() => {
        const timer = setTimeout(() => {
            console.log(`Time out`);
        }, 1000);
        console.log(`You clicked ${count} times`);
        return () => clearTimeout(timer); // Cleanup function to clear the timer
    }, [name]); // Effect runs when 'name' or 'count' changes

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <p>Your name is: {name}</p>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    );
}

function PostFetcher() {
    const [loading, setLoading] = React.useState(true);
    const [query, setQuery] = React.useState('');
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        console.log("Fetching posts...");
        if( query) {
           const fetchPosts = async () => {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${query}`);
                const data = await response.json();
                setPosts([data]);
                console.log("Posts fetched:", posts);
                setLoading(false);
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

export {Effect, PostFetcher};