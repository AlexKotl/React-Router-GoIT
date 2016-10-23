import React from 'react';
import {Link} from 'react-router';


import './list.css';

const List = props => {
    const users = props.users;
    return (
        <div>
            <ul className="list-group left-menu">
                {
                    users.map(user => (
                        <li key={user.id}>
                            <Link className="list-group-item" to={`/${user.id}`}>{user.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

export default List;