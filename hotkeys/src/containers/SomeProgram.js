import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// const mapStateToProps = state => ({
//     session: state.session
// })

// const mapDispatchToProps = dispatch => ({
//     login: input => dispatch(loginAction(input))
// })

class SomeProgram extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            hotKey: "",

        })
    }

    handleKey = (event) => {
        const key = event.which;
        
        (key === 66 && event.ctrlKey)
            ? console.log("you win!")
            :  console.log("You lose!")
    }

    componentWillMount() {
        document.addEventListener('keydown', this.handleKey);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKey);
    }

    render() {
        return <div>
            Here is our task window
        </div>
    }
}
//export default SomeProgram;