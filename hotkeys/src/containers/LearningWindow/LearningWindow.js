import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';

import Task from '../../components/Task/Task';

import './LearningWindow.css'

const mapStateToProps = (state) => ({
    tasks: state.tasks
  })

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
        if (event.ctrlKey && key !== 17){
            this.taskCheck(key)
        }
            
    }

    taskCheck = (key) => {
        switch (this.state.taskNum) {
            case 0:
                console.log("First Task")
                if (key === 65){
                    this.setState({
                        taskNum: this.state.taskNum + 1
                    });
                    
                }
                else console.log("Wrong combination! ctrl" + key)
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
        return (<Fragment>
        <div className="LearningWindow">
            Here is your first task<br />
            Hold hotkeys in fixed order:
            <ul>
                {this.props.tasks.map(task =>{
                    return <Task key={task.id} name={task.name} id={task.id} taskNum={this.state.taskNum}/>
                })}
            </ul>
        </div>
        </Fragment>
        )
    }
}
export default connect(mapStateToProps)(LearningWindow);