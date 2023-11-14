import React, { Component } from 'react';

class ClassCounterOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0, // Add a comma here
            name: ''  // Separate state properties with a comma
        };
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Updating document title');
        if (prevState.count !== this.state.count) {
            document.title = `Clicked ${this.state.count} times`;
        }
    }
    
    incrementCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 };
        });
    };

    render() {
        return (
            <div>
                <input
                    type='text'
                    value={this.state.name}
                    onChange={e => {
                        this.setState({ name: e.target.value });
                    }}
                />
                <button onClick={this.incrementCount}>
                    Click {this.state.count} times
                </button>
            </div>
        );
    }
}

export default ClassCounterOne;
