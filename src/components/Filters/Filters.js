import { Component } from "react";

import './filters.scss';
class Filters extends Component  {

    
    decorateCurrentBtn = (currentFilter) => {
        return {
            [currentFilter]: {background: '#C4ABD1'}
        }
    }


    render() {
        const {changeFilterState, currentFilter} = this.props;
        const styles = this.decorateCurrentBtn(currentFilter);

        return (

            <div className="filters-wrapper">
                <button style={styles.all !== undefined ? styles.all : {}} className="btn" onClick={() => changeFilterState('all')}>All Tasks</button>
                <button style={styles.current !== undefined ? styles.current : {}} className="btn" onClick={() => changeFilterState('current')}>Current</button>
                <button style={styles.done !== undefined ? styles.done: {}} className="btn" onClick={() => changeFilterState('done')}>Сompleted</button>
            </div>
        )
    }
}
export default Filters;