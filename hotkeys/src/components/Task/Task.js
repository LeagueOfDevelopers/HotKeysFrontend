import React, { Component } from 'react';

class Task extends Component {

    render() {
        const { name, id } = this.props;
        console.log(id + " " + name);
        return (

            <li>{name} {this.props.taskNum > id - 1 ? " 🥳 Nice!" : null}</li>
        )
    }
}

export default (Task);