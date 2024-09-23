import styled from "styled-components";

export const FormContainer = styled.form`
 max-width: 46rem;
  width: 100%;
  margin: 0 auto;

`
export const FormGroup = styled.div`
    transform: translateY(-50%);

    margin-bottom: 2.3125rem;
  display: flex;
  flex: 1;

  justify-content: space-between;
  gap: 0.5rem;  
`
export const TodoButton = styled.button`

display: flex;
  align-items: center;
  justify-content: center;

  height: 3.25rem;
  padding: 1rem;

  background-color: #1e6f9f;
  color: #F2F2F2;

  border: 0;
  border-radius: 8px;
  gap: 0.5rem;
  box-shadow: none;

  line-height: 140%;
  font-weight: bold;
  font-size: 0.875rem;

  transition: 0.2s;
  cursor: pointer;
`

export const TodoInput = styled.input`
  height: 3.375rem;
  padding: 1rem;
  width: 100%;

  border: 1px solid #0D0D0D;
  border-radius: 8px;

`