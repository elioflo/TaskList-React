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
`

const Input = styled.input`
  padding: .25rem .5rem;
  border: 1px solid rgba(0,0,0,.4);
  border-radius: .25rem;
  &:focus {
    outline: none;
  }
`


export default function TaskForm() {
  return (
    <Container>
      <Input type="text" required/>
      <Button>
        <i className="fa-solid fa-square-plus fa-2xl" style={{ color:"grey"}}></i>
      </Button>
    </Container>
  )
}
