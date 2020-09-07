import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css';

const Friend = (props) => {
    const {name, body, id, title} = props.friend;
    const history = useHistory();
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url);
    }
    const friendStyle = {
        border: '1px solid purple',
        margin: '100px',
        padding: '30px',
        borderRadius: '30px',
    }
    return (
        <div style={friendStyle}>
            <h2>{title}</h2>
            <p>{body}</p>
           
            <button className="main-btn" onClick={() => handleClick(id)}>Show Details</button>
        </div>
    );
};

export default Friend;