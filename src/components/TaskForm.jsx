import { useState, useContext } from 'react'

import { TaskContext } from '../context/TaskContext'
import '../css/Bootstrap.min.css'

function TaskForm() {
  const { createTask } = useContext(TaskContext)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function handleSubmit(evt) {
    evt.preventDefault()
    if (title === '') return;

    createTask({ title, description })
    setTitle('')
    setDescription('')
  }

  return (
    <form className='card bg-secondary mb-3 p-3 shadow' onSubmit={handleSubmit}>
      <div className='row'>

        <div className="col-12 col-lg-5 col-xl-5">
          <div className="row mb-3 my-1">
            <label className='d-inline-block form-label col-12' htmlFor="title">
              <h3 className='text-bg-secondary'>Title:</h3>
            </label>
            <div className="d-inline-block col-12 my-1">
              <input
                className='form-control my-lg-1 h-100 shadow'
                id='title'
                type="text"
                placeholder='My new task'
                value={title}
                autoFocus
                onChange={e => setTitle(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-5 col-xl-5">
          <div className="row mb-3 mb-xl-0">
            <label className='form-label col-12' htmlFor="description">
              <h3 className='text-bg-secondary my-1'>Description:</h3>
            </label>
            <div className="d-inline-block col-12 my-1">
              <textarea
                className='form-control shadow'
                rows='2' id='description'
                placeholder='Little description'
                value={description}
                onChange={e => setDescription(e.target.value)} >
              </textarea>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-2 py-lg-4">
          <input className='shadow btn btn-primary d-block h-100 w-75 mx-auto' type="submit" value="Add task" />
        </div>

      </div>
    </form>
  )
}

export default TaskForm