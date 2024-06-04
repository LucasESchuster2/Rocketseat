import logoTodo from '../../assets/logo-todo.svg'
import { HeaderContainer } from "./styles";

export function Header(){
  return (
    <>
      <HeaderContainer>
        <img src={logoTodo} alt="" />
      </HeaderContainer>
    </>
  )
}