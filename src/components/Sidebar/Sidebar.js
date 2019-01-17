import React, {Component} from 'react'
import styles from './Sidebar.css'

class Sidebar extends Component{
    render(){
        return(
            // <div className=''>
            //     <div>Header</div>
            //     <div>Days</div>
            //     <div>Cells</div>
            // </div>
        <div className="sidebar">
            <a className="" href="/">
              Today
            </a>
      
            <a className="" href="/">
              Calender
            </a>
      
            <a className="" href="/">
              Progress
            </a>
      
            <a className="" href="/">
              Friends
            </a>
        </div>
          
        )
    }
}

export default Sidebar