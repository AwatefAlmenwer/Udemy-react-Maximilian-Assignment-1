import React, { Component } from 'react';

import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import { render } from '@testing-library/react';

class App extends Component {
    state = {
        username: 'awatef',
    }
    userNameHandler = (event) => {
        this.setState({
            username: event.target.value
        });

    }
    switchNameHandler = (newName) => {
        this.setState({
            username: newName,
        })
    }

    render() {

        return (
            <div className="App">
                <UserInput username={this.state.username}
                    changed={this.userNameHandler} />
                <UserOutput username={this.state.username}
                    click={this.switchNameHandler.bind(this, 'Write  another  username')} />

            </div>
        )

    }
}

export default App;
