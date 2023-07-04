import styled from "styled-components";

export const DashboardPage = styled.div`
  min-height: 100vh;
  height: fit-content;
  width: 100%;
  background-color: var(--grey4);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--grey0);

  h1 {
    color: var(--primary);
    font-size: 20px;
  }
  .title {
    border: solid 1px var(--grey0);
    width: 100vw;
    height: 12vh;
    display: flex;
    justify-content: center;
  }
  .title div {
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
  }
  .title div button {
    border: none;
    height: 30px;
    width: 50px;
    color: var(--grey0);
    background-color: var(--grey3);
    border-radius: 3px;
  }
  .text {
    width: 90%;
    display: flex;
    flex-direction: column;
  }
  .text h3 {
    font-size: 17px;
  }
  .text p {
    font-size: 13px;
    color: var(--grey1);
  }
  @media (min-width: 700px) {
    .text {
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  .line {
    background-color: var(--grey0);
    width: 100vw;
    height: 1px;
  }
  main {
    width: 100vw;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 5vh;
  }
  .content {
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
  .content button {
    background-color: var(--grey3);
    color: var(--grey0);
    border: none;
    border-radius: 3px;
    height: 30px;
    width: 30px;
    font-weight: 900;
  }
  ul {
    background-color: var(--grey3);
    height: fit-content;
    padding: 15px;
    border-radius: 3px;
    width: 85%;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    list-style: none;
  }
  ul li {
    background-color: var(--grey4);
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    height: 38px;
    align-items: center;
    font-size: 15px;
    padding: 0 8px;
  }
  ul li div {
    display: flex;

    align-items: center;
    gap: 5px;
  }
  .trash-icon:hover {
    background-color: var(--grey2);
  }
  .p1 {
    font-weight: 700;
  }

  .modalbg {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    width: 100%;
    position: fixed;
    display: flex;

    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.8);
  }
  .modal-content {
    background-color: var(--grey3);
    height: fit-content;
    width: 83%;
    max-width: 300px;
    padding: 10px 10px 10px;
  }
  .modal-header {
    display: flex;
    justify-content: space-between;
    height: 7vh;
    align-items: center;
    padding: 0px 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
    .modal-close {
      background-color: var(--grey2);
      border: none;
      color: var(--grey3);
      font-weight: 600;
    }
    .modal-close:hover {
      color: var(--grey0);
    }
    .error-message {
      color: var(--negative);
    }
  }
`;
