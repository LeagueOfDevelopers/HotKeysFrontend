import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import './LearningWindow.css'

// const mapStateToProps = state => ({
//     session: state.session
// })

// const mapDispatchToProps = dispatch => ({
//     login: input => dispatch(loginAction(input))
// })

class LearningWindow extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            hotKey: "",
            taskNum: 0
        })
    }

    handleKey = (event) => {
        const key = event.which;
        console.log(key);
        if (event.ctrlKey && key != 17)
            this.taskCheck(key)
    }

    taskCheck = (key) => {
        switch (this.state.taskNum) {
            case 0:
                console.log("First Task")
                key === 65
                    ? this.setState({
                        taskNum: this.state.taskNum + 1
                    })
                    : console.log("Wrong combination! ctrl" + key)
                break;

            case 1:
                console.log("Second Task")
                key === 66
                    ? this.setState({
                        taskNum: this.state.taskNum + 1
                    })
                    : console.log("Wrong combination!ctrl" + key)
                break;

            case 2:
                console.log("third Task")
                key === 67 ?
                    this.setState({
                        taskNum: this.state.taskNum + 1
                    })
                    : console.log("Wrong combination!ctrl" + key)
                break;

            case 3:
                console.log("fourth Task")
                if(key === 68){
                    this.setState({
                        taskNum: this.state.taskNum + 1
                    });
                    alert("Well done!");
                }
                else console.log("Wrong combination!ctrl");
                break;

            default:
                break;
        }
    }

    componentWillMount() {
        document.addEventListener('keydown', this.handleKey);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKey);
    }

    render() {
        
        return <div className="LearningWindow">
            Here is your first task<br />
            Enter in fixed order:
            <ul>
                <li>ctrl+a {this.state.taskNum > 0 ? " 🥳 Nice!" : null}</li>
                <li>ctrl+b  {this.state.taskNum > 1 ? " 🥳 Nice!" : null}</li>
                <li>ctrl+c   {this.state.taskNum > 2 ? " 🥳 Nice!" : null}</li>
                <li>ctrl+d{this.state.taskNum > 3 ? " 🥳 Nice!" : null}</li>
            </ul>
        </div>
    }
}
export default LearningWindow;