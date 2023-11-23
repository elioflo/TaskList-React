/* eslint-disable react/prop-types */
import { useRef } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: .25rem;
  width: calc(100% - 2rem);
  margin: .5rem auto;
`

const Button = styled.button`
  border: none;
  background-color: transparent;
  color: rgba(25,25,225,1);
`

const Input = styled.input`
  padding: .25rem .5rem;
  border: 1px solid rgba(0,0,0,.4);
  border-radius: .25rem;
  &:focus {
    outline: none;
  }
`


export default function TaskForm({ addTask }) {

  const inputRef = useRef()

  function getTask() {
    const text = inputRef.current.value; 
    return text.trim() !== '' ? {
      isComplete: false,
      description: text
    }:null
  }

  return (
    <Container>
      <Input type="text" ref={inputRef} required/>
      <Button onClick={() => addTask(getTask())}>
        <i className="fa-solid fa-square-plus fa-2xl"></i>
      </Button>
    </Container>
  )
}
