import React from "react";

class Counter extends React.Component {
    state = {
        counter: 0
    };
    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }
    render() {
        if (this.state.counter > 5) {
            throw new Error('There might be some issue with code !');
        }
        return (
            <center><div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleClick}>+</button>
            </div></center>
        );
    }
};

export default Counter