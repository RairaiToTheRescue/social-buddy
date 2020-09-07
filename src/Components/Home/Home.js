import React, { useEffect } from 'react';
import { useState } from 'react';
import Friend from '../Friend/Friend';
import './Home.css';

const Home = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    return (
        <div>
            <h1 className="header">Social Buddy</h1>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    );
};

export default Home;