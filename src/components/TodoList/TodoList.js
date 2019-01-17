import React, {Component} from 'react'
class TodoList extends Component{
    render(){
        return(
            <div className=''>
                <div className=''>
                    <form onSubmit={this.props.addItem}>
                        <input placeholder='Task' />
                        <button type='submit'> Add Task</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoList