/* eslint-disable react/prop-types */
import styled from 'styled-components'

const Button = styled.button`
  border: none;
  background-color: transparent;
`

const ButtonCheck = styled(Button)`
  color: rgba(0,120,0,1);
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: .25rem;
  width: calc(100% - 2rem);
  margin: .5rem auto;
`

const Task = styled.p`
  border: 1px solid rgba(0,0,0,.4);
  padding: .25rem .5rem;
  border-radius: .25rem;
`

const TaskComplete = styled(Task)`
  background-color: rgba(0,150,0,.2);
`

export default function TaskItem({task, remove, toggle}) {
  return (
    <Container>
      { task.isComplete? <TaskComplete> {task.description} </TaskComplete> : <Task>{task.description}</Task> }
      { task.isComplete? 
      <ButtonCheck onClick={toggle}>
        <i className="fa-solid fa-square-check fa-lg"></i>
      </ButtonCheck> :
      <Button onClick={toggle}>
        <i className="fa-solid fa-square-check fa-lg"></i>
      </Button>}
      <Button onClick={remove}>
        <i className="fa-solid fa-trash-can fa-lg"></i>
      </Button>
    </Container>
  )
}