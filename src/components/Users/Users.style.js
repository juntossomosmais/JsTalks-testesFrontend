import styled from 'styled-components'

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
  width: 450px;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;

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
`

export const ListActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
  width: 100%;
`

export const Button = styled.button`
  background: #34495e;
  border-radius: 4px;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  outline: none;
  margin: 0 10px;

  &:last-of-type {
    margin: 0;
  }
`
