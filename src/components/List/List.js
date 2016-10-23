import React from 'react';


const List = props => {
    const users = props.users;
    return (
        <div>
            <ul>
                {
                    users.map(user => (
                        <li key={user.id}>
                            <a href={`/${user.id}`}>{user.name}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

export default List;