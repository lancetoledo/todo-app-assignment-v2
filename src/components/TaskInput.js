import React, { useState } from 'react'

/* TASKINPUT TODOS
How do we ADD a document(task) to Firestore?

- import addDoc and collection from firebase/firestore
- import db from ../utils/firebase.js
- make handleForm async/await
- await addDoc()
- Pass collectionRef and payload to addDoc()


*/

export const TaskInput = ({tasks,setTasks}) => {

    const [input, setInput] = useState("")

    const handleChange = (e)=> {
      setInput(e.target.value)
    }

    const handleForm = (e) => {
        e.preventDefault()

    const generateId = (array) => {
        // This variable should hold an array of all the ids
        const taskIDs = array.map((item)=> item.id)

        console.log(taskIDs)
        return Math.max(...taskIDs) + 1
    }

        // Create a new todo object
        const newTask = {
            id: generateId(tasks),
            text: input,
            status: false
        }

     

        // How do I add a new task to the list

  


        setTasks([newTask,...tasks])
    }

  return (
    <div className='task-input'>
        <div className= 'check'>
            <div className='check-mark'>
                {/* insert image here */}
            </div>
        </div>
        <div className='new-todo-input'>
            <form onSubmit={handleForm}>
                <input onChange={handleChange} id='todo-input' type="text" placeholder='Create a new todo...' />
            </form>
        </div>
  </div>
  )
}
