import React, {Component} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import Header from './components/Header/Header';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

export default App;
