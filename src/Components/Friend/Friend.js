import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id} = props.friend;

    const friendStyle = {border: '2px solid purple', margin: '20px', padding: '20px', borderRadius: '10px'}
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p><Link to={`/friend/${id}`}>
                    <button>Show Detail Off {id}</button>
                </Link></p>
        </div>
    );
};

export default Friend;