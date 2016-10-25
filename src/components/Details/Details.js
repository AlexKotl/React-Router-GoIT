import React from 'react';
import users from './../../data/users';

import './details.css'

const Details = props => {
    const user = users.filter(val => parseInt(props.params.id) === val.id)[0];

    if (user === undefined) return (
        <div>Not found :(</div>
    )

    return (
        <div>
            <h1>{user.name}</h1>
            <h3>User ID: {user.id}</h3>
            <p>{user.description}</p>
        </div>
    )
};

export default Details;