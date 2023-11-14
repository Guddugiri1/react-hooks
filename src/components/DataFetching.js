import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    const handleClick = () => {
        setIdFromButtonClick(id);
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res);
                setPost(res.data); // Update state with fetched data
            })
            .catch(err => {
                console.log(err); // Log any errors that occurred during the fetch
            });
    }, [idFromButtonClick]); // Dependency array to execute when idFromButtonClick changes

    return (
        <div>
            <input type="number" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
        </div>
    );
}

export default DataFetching;
