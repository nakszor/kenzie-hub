import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--grey0);
  width: 100%;
  height: fit-content;
  max-width: 370px;
  background: var(--grey3);
  border-radius: 3px;

  span {
    font-size: 12px;
    margin-top: 30px;
  }
  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
  .link button {
    width: 90%;
    margin-bottom: 15px;
  }
`;
export default Container;
