
import React, { Component } from 'react';
import './addTask.scss';


class AddTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
        this.inputRef = React.createRef()
    }

    onWriteTask = (e) => {
        this.setState({
            task: e.target.value
        })
    }
    
    onAdd = () => {
        const inp = this.inputRef.current;
        inp.value = '';
        const newTask = {
            name: this.state.task,
            status: false,
            description: ''
        }
        this.props.addNewTask(newTask);
    }

    addOnKey = (e) => {
        if(e.code === 'Enter') {
            this.onAdd();
        }
    }

    render() {

        
    
        return (
            <div className="controls">
                <input className='controls-add-input' type="text" onChange={this.onWriteTask} ref={this.inputRef} onKeyDown={this.addOnKey}/>
                <button onClick={this.onAdd} className="add-btn">+</button>
            </div>
        )
    }
}


export default AddTask;