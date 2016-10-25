import React from 'react';
import List from '../../components/List/List';

import users from './../../data/users';


class Main extends React.Component {
    render() {
        return (
            <div>
                <List users={users}/>

                <div className="right-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Main;