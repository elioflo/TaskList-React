/* eslint-disable react/prop-types */
import TaskItem from "./TaskItem";
import styled from "styled-components";

const Container = styled.div`
  max-height: 20rem;
  overflow-y: auto;
  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: #8c8c8c #f2f2f2;

  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f2f2f2;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #8c8c8c;
    border-radius: 16px;
    border: 1px solid #ffffff;
  }
`

export default function TaskList({tasks, removeTask, toggleComplete}) {
  return (
    <Container>
      {tasks.map((task, index) => <TaskItem key={index} task={task} remove={() => removeTask(index)} toggle={()=>toggleComplete(index)} />)}
    </Container>
  )
}