import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import './FriendDetail.css';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
    },[])
    return (
        <div className="FriendStyle">
            <p>Comment no: {friendId}</p>
            <h3><b>Name</b>: {friend.name}</h3>
            <p>Email: {friend.email}</p>
            <p> <b>Comment: {friend.body}</b></p>
        </div>
    );
};

export default FriendDetail;