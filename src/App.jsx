import styled from 'styled-components'
import { useEffect, useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

const Container = styled.div`
  min-height: 100%;
  padding-top: 10%;
`

const TaskApp =  styled.div`
  margin: 0 auto;
  width: calc(100% - 3rem);
  max-width: 24rem;
  border-radius: 0.5rem;
  padding: 1.5rem 0;
  background-color: white;
`

const Title = styled.h1`
  text-align: center;
`

function App() {
  
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [])
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Container>
      <TaskApp>
        <Title>Tareas</Title>
        <TaskForm 
          addTask={(task) => task && setTasks([task, ...tasks])} 
          />
        <TaskList 
          tasks={tasks} 
          removeTask={(index) => setTasks(tasks.filter((_, i) => i !== index))}
          toggleComplete={(index) => setTasks(tasks.map((task, i) =>i === index ? { ...task, isComplete: !task.isComplete } : task))}
          />
      </TaskApp>
    </Container>
  )
}

export default App
