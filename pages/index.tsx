import styled from 'styled-components'
import { ListOfTodo } from '../components/ListOfTodo'
const Title = styled.h1`
  color: red;
  font-size: 50px;
`
export default function Home() {
  return <Title>My page
    <ListOfTodo />
  </Title>
}
