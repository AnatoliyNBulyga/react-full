import React from 'react';

class ClassCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        // this.increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
    }

    increment = () => {
        this.setState({count: this.state.count + 1})
    }
    decrement = () => {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div className="counter">
                <div style={{fontSize: '20px', marginBottom: '10px'}}>Likes: {this.state.count}</div>

                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }

}

export default ClassCounter;