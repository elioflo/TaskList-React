import styled from 'styled-components'
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
  return (
    <Container>
      <TaskApp>
        <Title>Tareas</Title>
        <TaskForm />
        <TaskList />
      </TaskApp>
    </Container>
  )
}

export default App
