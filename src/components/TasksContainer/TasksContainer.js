import { Component } from "react";

import './tasksContainer.scss';
import AddTask from "../AddTask/AddTask";
import TaskItem from "../TaskItem/TaskItem";
import Filters from "../Filters/Filters";

class TasksContainer extends Component {

    render() {
        const {addNewTask, tasks, onDeleteItem, changeStatus, changeFilterState , currentFilter, addDescrToTheTask} = this.props;

        const items = tasks.map(item => {
            const {id, ...properties} = item;
            return <TaskItem 
                        key={id} 
                        {...properties} 
                        id={id} 
                        onDeleteItem={() => onDeleteItem(id)} 
                        changeStatus={() => changeStatus(id)}
                        addDescrToTheTask={addDescrToTheTask}/>
        });
        
        return (

            <div className="tasks-container">
                <AddTask addNewTask={addNewTask}/>
                <Filters changeFilterState={changeFilterState} currentFilter={currentFilter}/>

                <ul className="tasks-list">
                    {items}
                </ul>
            </div>
        )
    }
}

export default TasksContainer;