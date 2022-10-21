import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const [friend, setFriend] = useState({})
    const {friendId} = useParams();

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [friendId]);


    const friendsStyle = {border: '2px solid green', padding: '20px', margin:'20px', borderRadius: '10px'}
    return (
        <div style={friendsStyle}>
            {/* <h3>watch friend detail {friendId}</h3> */}
            <h1>Name: {friend.name}</h1>
            <p>Email: {friend.email}</p>
            <p>Phone: {friend.phone}</p>
            <p>Website: {friend.website}</p>
        </div>
    );
};

export default FriendDetail;