import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";

import * as Styled from "./InterativeList.styles";

const InterativeList = () => {
  const [listState, setListState] = useState([]);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (!data.item) return;
    setListState([...listState, data.item]);
  };

  const removeItem = (itemToRemove) => {
    const updatedList = listState.filter((item) => item !== itemToRemove);
    setListState(updatedList);
  };

  return (
    <>
      <Styled.ListWrapper>
        {listState.length > 0 ? (
          <ul data-testid="interative-list">
            {listState.map((item) => {
              return (
                <li key={uuidv4()}>
                  {item} <button onClick={() => removeItem(item)}>X</button>
                </li>
              );
            })}
          </ul>
        ) : (
          <div data-testid="no-items">No Items :(</div>
        )}
      </Styled.ListWrapper>

      <Styled.FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <input data-testid="add-item-input" name="item" ref={register} />
        <button data-testid="add-item-sbmt" type="submit">
          Add item
        </button>
      </Styled.FormWrapper>
    </>
  );
};

export default InterativeList;
