import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import Hotkeys from 'react-hot-keys';
import hotkeys from 'hotkeys-js';

import Task from '../../components/Task/Task';
import {loadTasks} from '../../actions'
import './LearningWindow.css'

const mapStateToProps = (state) => ({
    tasks: state.tasks
  })

  const testTasks = [
    { "id": 1, "name": "ctrl+a", "answer": 65 },
    { "id": 2, "name": "ctrl+b", "answer": 66 },
    { "id": 3, "name": "ctrl+c", "answer": 67 },
    { "id": 4, "name": "ctrl+d", "answer": 68 }]
  
  const mapDispatchToProps = dispatch => ({
    loadTasks: (tasks) => dispatch(loadTasks(tasks)),
  })

  hotkeys('*', function(e){
    if(hotkeys.shift) console.log('shift is pressed!');
    if(hotkeys.ctrl) console.log('ctrl is pressed!');
    if(hotkeys.alt) console.log('alt is pressed!');
    if(hotkeys.option) console.log('option is pressed!');
    if(hotkeys.control) console.log('control is pressed!');
    if(hotkeys.cmd) console.log('cmd is pressed!');
    if(hotkeys.command) console.log('command is pressed!');
  });

class LearningWindow extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            hotKey: "",
            taskNum: 0,
            output: "",
            keyNames:'command+c, shift+a'
        })
    }

    log (){
        console.log(6383)
    }
    componentDidMount() {
        this.props.loadTasks(testTasks);
        hotkeys('command+r',(event)=>{event.preventDefault();});
        hotkeys('command+a',(event)=>{event.preventDefault();});
        hotkeys('*,wcj,shift+c', (event) => {
            console.log('do something',event);
          });
          hotkeys('*', function(){
            console.log(hotkeys.getPressedKeyCodes()); //=> [17, 65] or [70]
          });
        
      }



    // handleKey = (event) => {
    //     const key = event.which;
    //     console.log(key);
    //     if (event.ctrlKey && key !== 17){
    //         this.taskCheck(key)
    //     }
            
    // }

    // taskCheck = (key) => {
    //     switch (this.state.taskNum) {
    //         case 0:
    //             console.log("First Task")
    //             if (key === 65){
    //                 this.setState({
    //                     taskNum: this.state.taskNum + 1
    //                 });
                    
    //             }
    //             else console.log("Wrong combination! ctrl" + key)
    //             break;

    //         case 1:
    //             console.log("Second Task")
    //             key === 66
    //                 ? this.setState({
    //                     taskNum: this.state.taskNum + 1
    //                 })
    //                 : console.log("Wrong combination!ctrl" + key)
    //             break;

    //         case 2:
    //             console.log("third Task")
    //             key === 67 ?
    //                 this.setState({
    //                     taskNum: this.state.taskNum + 1
    //                 })
    //                 : console.log("Wrong combination!ctrl" + key)
    //             break;

    //         case 3:
    //             console.log("fourth Task")
    //             if(key === 68){
    //                 this.setState({
    //                     taskNum: this.state.taskNum + 1
    //                 });
    //                 alert("Well done!");
    //             }
    //             else console.log("Wrong combination!ctrl");
    //             break;

    //         default:
    //             break;
    //     }
    // }

    componentWillMount() {
        document.addEventListener('keydown', this.handleKey);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKey);
    }

      onKeyDown(keyNm, e, handle) {
        console.log("test:onKeyDown", keyNm, e)
        console.log(handle)
        this.setState({output: keyNm})
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
        <Hotkeys 
        keyName={this.state.keyNames}
        onKeyDown={this.onKeyDown.bind(this)}
        >
        <div style={{ padding: 50 }}> {this.state.output} </div>
      </Hotkeys>
 
        </Fragment>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LearningWindow);