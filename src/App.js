import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState, useEffect} from 'react'
import AddTask from './components/AddTask'
import BreakInterval from './components/BreakInterval'
import SessionLength from './components/SessionLength'
import Timer from './components/Timer'





function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    
  ])

  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [isSession, setIsSession] = useState(true)
  const [timerMinute, setTimerMinute] = useState(25)


  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }
  

  const onIncreaseBreakLength = () => {
    setIsSession(false)
    if (breakLength === 60) {
      return;
    }
    setBreakLength(breakLength + 1)
    setTimerMinute(breakLength + 1)
  }

  const onDecreaseBreakLength = () => {
    setIsSession(false)
    if (breakLength === 1) {
      return;
    }
    setBreakLength(breakLength - 1)
    setTimerMinute(breakLength - 1)
  }


  const onIncreaseSessionLength = () => {
    setIsSession(true)
    if (sessionLength === 60) {
      return;
    }
    setSessionLength(sessionLength + 1)
    setTimerMinute(sessionLength + 1)
  }

  const onDecreaseSessionLength = () => {
    setIsSession(true)
    if (sessionLength === 1) {
      return;
    }
    setSessionLength(sessionLength - 1)
    setTimerMinute(sessionLength - 1)
  }


  const onUpdateTimerMinute = () => {
    setTimerMinute(timerMinute - 1)
  }

  const resetTimerMinute = () => {
    if (isSession) {
      setTimerMinute(sessionLength)
    } else {
      setTimerMinute(breakLength)
    }
    
  }

  const onToggleInterval = () => {
    if (isSession) {
      setTimerMinute(sessionLength)
    } else {
      setTimerMinute(breakLength)
    }
  }



  //Date
  var d = Date()
  d = d.split(' ')
  d = d[0] + " " + d[1] + " " + d[2] + " " + d[3]

  


  return (

    <div className="mainContainer">
      <div>
        <h1 className="topPageHeader">Productivity Planner</h1>
      </div>
      <div className="topnav">
        <p className="date">{d}</p>
        <a href="#">Contact</a>
        <a href="#">Settings</a>
        <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank">About Pomodoro</a>
      </div>
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Tasks to Show')}
      </div>

      <div className="pomodoroContainer">
        <h1 className="pomoHeader">Pomodoro Clock</h1>
        <section className="interval-length-container">
          <BreakInterval breakInterval={breakLength} increaseBreak={onIncreaseBreakLength} decreaseBreak={onDecreaseBreakLength}/>
          <SessionLength sessionLength={sessionLength} increaseSession={onIncreaseSessionLength} decreaseSession={onDecreaseSessionLength}/>
        </section>

        <Timer 
        isSession={isSession} 
        timerMinute={timerMinute} 
        breakLength={breakLength}
        sessionLength={sessionLength}
        resetTimerMinute={resetTimerMinute}
        updateTimerMinute={onUpdateTimerMinute} 
        toggleInterval={onToggleInterval}

        />
      </div>
    </div>

  );
}

export default App;
