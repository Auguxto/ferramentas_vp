import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  height: 100vh;

  background-color: #ffffff;
`;

export const Form = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  width: 550px;
  height: 270px;

  background-color: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  padding: 30px 25px;
`;

export const Input = styled.input`
  width: 500px;
  height: 60px;

  background-color: #f0f0f0;
  border-radius: 10px;
  border: none;

  font-weight: 400;
  font-size: 22px;
  line-height: 25px;

  padding-left: 20px;

  color: #6d6d6d;

  outline: none;

  ::placeholder {
    font-weight: 400;
    font-size: 22px;
    line-height: 25px;

    color: #b5b5b5;
  }
`;

export const Button = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 100px;
  height: 50px;

  background-color: #fbbc5e;
  border-radius: 10px;

  outline: none;
  border: none;

  cursor: pointer;

  font-weight: 400;
  font-size: 34px;
  line-height: 39px;

  color: #ffffff;

  transition: all 0.2s;

  :hover {
    filter: brightness(0.9);
  }
`;
