import styled from "styled-components";

export const RegisterPage = styled.div`
  background-color: var(--grey4);
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 25px;

  h1 {
    color: var(--primary);
    font-size: 20px;
  }
  .title {
    width: 90%;
    display: flex;
    justify-content: space-between;
    height: 38px;
    margin-top: 60px;
    max-width: 370px;
  }
  .title button {
    border: none;
    height: 38px;
    color: var(--grey0);
    background-color: var(--grey3);

    border-radius: 3px;
  }
  form {
    background-color: var(--grey3);
    width: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 15px;
    color: var(--grey0);
    border-radius: 3px;
    padding-bottom: 20px;
    max-width: 370px;
  }
  .container {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 0px;
    gap: 10px;
    margin-top: 15px;
  }
  .text p {
    font-size: 11px;
    color: var(--grey1);
  }
  .text h3 {
    font-size: 15px;
  }
  label {
    font-size: 12px;
  }
  input {
    width: 96%;
    height: 38px;
    border-radius: 3px;
    background: var(--grey2);
    border: solid 2px transparent;
  }
  input:focus {
    border: solid 2px var(--grey0);
    outline: none;
    color: var(--grey0);
  }

  .register-btn {
    width: 100%;
    margin-top: 15px;
    width: 100%;
    border: none;
    height: 38px;
    background-color: var(--primary);
    border-radius: 3px;
    color: var(--grey0);
  }
  .link {
    text-decoration: none;
    display: flex;

    justify-content: space-between;
    width: 100%;
  }
`;
