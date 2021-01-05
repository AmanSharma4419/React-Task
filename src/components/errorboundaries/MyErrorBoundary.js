import React from "react";

class MyErrorBoundary extends React.Component {
    state = {
        errorMessage: '',
    }
    static getDerivedStateFromError(error) {
        return { errorMessage: error.toString() }
    }
    componentDidCatch(error, info) {
        this.setState({ ...this.state, errorMessage: error.message })
    }
    render() {
        if (this.state.errorMessage !== "") {
            return (
                <p>
                    {this.state.errorMessage}
                </p>
            )
        } else {
            return this.props.children

        }
    }
}


export default MyErrorBoundary