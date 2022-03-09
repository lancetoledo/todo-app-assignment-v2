import React from 'react'
import { FilterControl } from './FilterControl'
import { Task } from './Task'

/* TASKLIST TODOS
How do we DELETE a collection from our Firestore db?

- import deleteDoc, and doc from 'firebase/firestore'
- import db from '../utils/firebase'
- use deleteDoc in clearCompleted
- deleteDoc(docRef, id) 
*/


export const TaskList = ({tasks, setTasks,filterStatus,setFilterStatus, filteredTasks}) => {

  const clearCompleted = ()=> {
    //Clear's Tasks by filtering out
      setTasks(tasks.filter((task)=> !task.status))
    //With Firebase we can delete a document
    
    
    // Reset the filterStatus to all
      setFilterStatus("all")
  }

  return (
    
    <div className='task-list-wrapper'>
        <div className='task-list'>
            {filteredTasks.map((task)=> {
        
                return <Task 
                    text = {task.text}
                    status = {task.staus}
                    tasks = {tasks}
                    setTasks = {setTasks}
                    task = {task}
                    key = {task.id}
                    />
            })}

        </div>

        <div className='task-items-info'>
            <div className='items-left'>
                5 items left
            </div>

            <FilterControl 
                filterStatus = {filterStatus}
                setFilterStatus = {setFilterStatus}
            />

            <div className='items-clear'>
                <span onClick={clearCompleted}>Clear Completed</span>
            </div>
        </div>

    </div>

  
  )
}
