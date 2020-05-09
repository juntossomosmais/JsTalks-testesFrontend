import styled from "styled-components";

export const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  width: 100%;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    width: 250px;

    li {
      display: flex;
      border-bottom: solid 1px #95a5a6;
      padding: 15px 0;
      justify-content: space-between;

      &:last-of-type {
        border: none;
      }
    }
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;

  input {
    padding: 5px;
    width: 200px;
    margin: 0 10px 0 0;
  }

  button {
    background: #2ecc71;
    border-radius: 4px;
    color: #fff;
    padding: 8px 12px;
    outline: none;
  }
`;
