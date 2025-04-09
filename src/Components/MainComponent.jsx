import React, { useState } from 'react'
import TasksComponent from './TasksComponent';
import PerformanceComponent from './PerformanceComponent ';
import '../Styles/MainComponent.css'

const MainComponent=({searchQuery})=> {
    const [section,setSection]=useState('tasks')
  return (
    <div className='mainContainer'>
        <div className='topsection'>
            <button className='tasksec' onClick={()=>setSection('tasks')}>Task List</button>
            <button className='performancesec' onClick={()=>setSection('performance')}>Performance</button>
        </div>
        <hr/>
        <div>
            {section==='tasks' && <TasksComponent searchQuery={searchQuery} />}
            {section==='performance' && <PerformanceComponent/>}
        </div>
    </div>
  )
}

export default MainComponent
