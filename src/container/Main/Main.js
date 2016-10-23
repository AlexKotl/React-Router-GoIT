import React from 'react';
import List from '../../components/List/List';

const users = [
    {id: 0, name: 'John Doe'},
    {id: 1, name: 'Den Abramov'},
    {id: 3, name: 'Andrey Prisniak'},
    {id: 4, name: 'Slava Katrenko'}
];


class Main extends React.Component {
    render() {
        return (
            <div>
                <List users={users}/>
            </div>
        )
    }
}

export default Main;