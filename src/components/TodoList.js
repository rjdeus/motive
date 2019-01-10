import React, {Component} from 'react'
class TodoList extends Component{
    render(){
        return(
            <div className=''>
                <div className=''>
                    <form>
                        <input placeholder='Task' />
                        <button type='submit'> Add Task</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoList