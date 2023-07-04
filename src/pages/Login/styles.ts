import styled from "styled-components";
import "../../components/colors/colors.css";

export const Login = styled.div`
  background-color: var(--grey4);

  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    max-width: 370px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  h3 {
    margin-top: 30px;

    color: var(--grey0);
    font-size: 14px;
  }

  div {
    width: 90%;
    display: flex;
    flex-direction: column;
    color: var(--grey0);
    gap: 5px;
  }
  label {
    font-size: 12px;
  }
  .link {
    width: 90%;
  }
  .link button {
    margin-top: 10px;
    background-color: var(--grey1);
    width: 100%;
    border: none;
    height: 38px;
  }
  .not-registered {
    display: flex;
    align-items: center;
  }
`;
