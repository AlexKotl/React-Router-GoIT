import React from 'react';
import {Link} from 'react-router';
//import Details from './../Details/Details';

import './list.css';

const List = props => {
    const users = props.users;
    return (
        <div>
            <ul className="list-group left-menu">
                {
                    users.map(user => (
                        <li key={user.id}>
                            <Link className="list-group-item" to={`/users/${user.id}`}>{user.name}</Link>
                        </li>
                    ))
                }
            </ul>
            
        </div>
    )
};

export default List;