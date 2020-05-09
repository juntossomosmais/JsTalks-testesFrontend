import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import InterativeList from "./InterativeList";

describe("<InterativeList />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should display no items", () => {
    // when
    const { getByTestId, baseElement } = render(<InterativeList />);

    // then
    expect(getByTestId("no-items")).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot("no items");
  });

  it("should add a new item", async () => {
    // given
    const inputValue = "react test";

    // when
    const { getByTestId, rerender, getByText } = render(<InterativeList />);
    const input = getByTestId("add-item-input");
    const submitButton = getByTestId("add-item-sbmt");

    fireEvent.change(input, { target: { value: inputValue } });
    await waitFor(() => fireEvent.click(submitButton));

    rerender(<InterativeList />);

    const list = getByTestId("interative-list");

    // then
    expect(getByText(inputValue)).toBeInTheDocument();
    expect(list).toMatchSnapshot("item with the inputValue");
  });
});
