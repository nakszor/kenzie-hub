import styled from "styled-components";

const Input = styled.input`
  width: 97%;
  height: 38px;
  border-radius: 3px;
  background-color: var(--grey2);
  border: solid 2px transparent;

  :focus {
    border: solid 2px var(--grey0);
    outline: none;
    color: var(--grey0);
  }
`;
export default Input;
