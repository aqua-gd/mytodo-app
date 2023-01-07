import { useContext } from 'react'

import { TaskContext } from '../context/TaskContext'
import TaskCard from './TaskCard';
import '../css/Bootstrap.min.css'

function TaskList() {
  const { taskList } = useContext(TaskContext)
  // console.log(taskList)

  if (taskList.length === 0) {
    return (
      <div className='d-block mx-auto'>
        <h2 className='text-bg-dark text-center'>There's no tasks still...</h2>
        <p className='text-bg-dark text-center'>Add one!</p>
      </div>
    )
  }

  return (
    <>
      {taskList.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </>
  )
}

export default TaskList