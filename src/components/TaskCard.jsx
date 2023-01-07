import PropTypes from 'prop-types'
import { useContext } from 'react'
import { VscCheck } from 'react-icons/vsc'

import { TaskContext } from '../context/TaskContext'
import '../css/Bootstrap.min.css'

function TaskCard({ task }) {
  const { completeTask } = useContext(TaskContext)

  return (
    <div className='col-12 col-md-6 col-lg-4 col-xxl-3 mb-3'>
      <div className='card bg-secondary h-100 p-3 shadow'>
        <div className="row justify-content-between">
          <div className='col-9'>
            <h3 className='text-bg-secondary'>{task.title}</h3>
            <p className='text-bg-secondary'>{task.description}</p>
          </div>

          <div className='col-3'>
            <button
              className='shadow btn btn-success d-block mx-auto my-2'
              onClick={() => completeTask(task.id)}>
              <VscCheck />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
}

export default TaskCard