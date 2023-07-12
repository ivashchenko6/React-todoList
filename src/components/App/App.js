import { Component } from "react";
import TasksContainer from "../TasksContainer/TasksContainer";


import './app.scss';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            filter: 'all'
        }
    }


    addNewTask = (newTask) => {
        newTask.id = this.state.tasks.length;
        this.setState(({tasks}) => {
            return {
                tasks: [...tasks, newTask]
            }
        })
    }
    
    onDeleteItem = (id) => {
        this.setState(({tasks}) => ({
            tasks: tasks.filter(item => item.id !== id)
        }));
    }
    
    addDescrToTheTask = (id, descr) => {
        this.setState(({tasks}) => {
            return {
                tasks: tasks.filter(item => {
                    
                    if(item.id === id) {
                        item.description = descr
                        return item
                    }
                    return item
                })
            }
        })
    }

    changeStatus = (id) => {
        this.setState(({tasks}) => {
            return {
                tasks: tasks.map(task => {
                    if(task.id === id) {
                        return {...task, status: !task.status}
                    }
                    return task
                })
            }
        })
    } 

    filterByType = (items, filter) => {
        switch(filter) {
            case 'done':
                return items.filter(item => item.status);
            case 'current':
                return items.filter(item => !item.status);
            default: 
                return items;
        }
    }


    changeFilterState = (filter) => {
        const items = this.filterByType(this.state.tasks, filter);

        if(items.length > 0 || filter === 'all') {
            this.setState(({filter}))
        }
    }

    render() {
        const {tasks, filter} = this.state;

        const data = this.filterByType(tasks, filter);


        return (
            <div className="app">
                <h1>Tasks</h1>
                <TasksContainer 
                    addNewTask={this.addNewTask}  
                    onDeleteItem={this.onDeleteItem} 
                    tasks={data} 
                    changeStatus={this.changeStatus}
                    changeFilterState={this.changeFilterState}
                    currentFilter={filter}
                    addDescrToTheTask={this.addDescrToTheTask}/>
            </div>
        )
    }
}

export default App;