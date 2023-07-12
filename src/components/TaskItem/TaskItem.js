import React, { Component } from "react";
import checkmark from '../../img/check-mark.png';


import './taskItem.scss';
class TaskItem extends Component {
    constructor(props) {
        super(props);
        
        this.circleRef = React.createRef();
        this.descrRef = React.createRef();

        this.state = {
            descr: ''
        }
    }
    
    onWriteDescription = (e) => {
        this.setState({
            descr: e.target.value
        })
    }
    
    onAddDescription = (e) => {
        if(e.code === 'Enter') {
            this.props.addDescrToTheTask(this.props.id, this.state.descr);
            e.target.blur()
        }
        
    }
    
    render() {
        const {name, status, onDeleteItem, changeStatus, description} = this.props;
        let descriptionClasses = 'task-item__description';
        const onHover = (e) =>  {
            if(!this.descrRef.current.classList.contains('task-item__description_active')) {
                this.descrRef.current.classList.add('task-item__description_active')
            }
        }
        const onLeft = (e) =>  {
            if(this.descrRef.current.classList.contains('task-item__description_active') && description.length === 0 && document.activeElement !== this.descrRef.current.children[0]) {
                this.descrRef.current.classList.remove('task-item__description_active')
            }
        }

        return (
            <li className="task-item" onMouseEnter={() => onHover()} onMouseLeave={() => onLeft()}>
                <div className="task-item__wrapper">
                    <div className="task-item__container">
                        <div className="task-item__circle" onClick={changeStatus} ref={this.circleRef}>
                            <img src={checkmark} alt="status" className="task-item__status" style={status ? {display:"inline"} : {display:'none'}}/>
                        </div>
                        <p className="task-text">{name}</p>
                    </div>

                    <button className="delete-btn" onClick={onDeleteItem}>🗑️</button>
                </div>
                

                <div className={descriptionClasses} ref={this.descrRef}>
                    <input type="text" className="task-item__description-input" onInput={this.onWriteDescription} onKeyDown={this.onAddDescription} />
                </div>
            </li>
        )
    }

};


export default TaskItem;