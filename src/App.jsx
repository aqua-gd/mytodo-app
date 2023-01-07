import { VscCheckAll } from 'react-icons/vsc'

import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './css/Bootstrap.min.css'

function App() {
  return (
    <div style={{ minHeight: '100vh', height: '100%' }}
      className='container-fluid bg-dark px-4 py-3'>
      <h1 className='text-bg-dark text-center mb-3'>
        ToDo App <VscCheckAll />
      </h1>
        <TaskForm />
      <div className="row gx-3">
        <TaskList />
      </div>
    </div>
  )
}

export default App
