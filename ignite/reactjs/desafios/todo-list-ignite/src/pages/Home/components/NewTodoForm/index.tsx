import { PlusCircle } from "phosphor-react";
import { FormContainer, FormGroup, TodoButton, TodoInput } from "./styles";

export function NewTodoForm() {
  return (
    <FormContainer action="">
      <FormGroup>
        <TodoInput />
        
        <TodoButton type="submit">
          Criar
          <PlusCircle size={16} color="#f2f2f2" weight="bold" />
        </TodoButton>
      </FormGroup>
    </FormContainer>
  );
}
