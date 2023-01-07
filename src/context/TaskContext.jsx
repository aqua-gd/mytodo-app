import {
  createContext,
  useState,
  useEffect
} from 'react'

export const TaskContext = createContext()

export function TaskContextProvider(props) {
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    setTaskList(Array.isArray(JSON.parse(localStorage.getItem('tasksData')))
      ? JSON.parse(localStorage.getItem('tasksData'))
      : []
    )
  }, [])

  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
  }

  function createTask({ title, description }) {
    localStorage.setItem('tasksData', JSON.stringify(
      [{
        id: uuidv4(),
        title,
        description
      }, ...taskList]
    ))
    setTaskList(JSON.parse(localStorage.getItem('tasksData')))
  }

  function completeTask(id) {
    localStorage.setItem('tasksData', JSON.stringify(
      taskList.filter(task => task.id !== id)
    ))
    setTaskList(JSON.parse(localStorage.getItem('tasksData')))
  }

  return (
    <TaskContext.Provider
      value={{
        taskList,
        createTask,
        completeTask
      }}>
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskContextProvider