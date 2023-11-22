import styled from 'styled-components'

const Boton = styled.button`
  border: none;
  background-color: transparent;
`

const Contenedor = styled.div`
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

  ${({ complete }) => complete && `
    background-color: rgba(0,150,0,.2);
  `}
`

export default function TaskItem() {
  return (
    <Contenedor>
      <Task complete={true}>tarea</Task>
      <Boton>
      <i className="fa-solid fa-square-check fa-lg"></i>
      </Boton>
      <Boton>
        <i className="fa-solid fa-trash-can fa-lg"></i>
      </Boton>
    </Contenedor>
  )
}