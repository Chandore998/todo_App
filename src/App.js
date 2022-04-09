
import './App.css';
import Header from './components/Header'
import Dailytask from './components/Dailytask';
import TaskList from './components/TodoList'
import './index.css';

function App() {
  return (
    <div className='top-container'>
    <div className="  h-60 flex flex-col items-center main_container ">
     <Header/>
     <Dailytask/>
     <TaskList/>
     </div>

    </div>
  );
}

export default App;
