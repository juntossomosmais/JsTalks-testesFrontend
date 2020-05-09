import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Button from "./Button";

describe("<Button />", () => {
  it("should return the props text", () => {
    // given
    const expectedResult = "TestButton";

    // when
    const component = render(<Button text={expectedResult} />);

    // then
    expect(component.getByText("TestButton")).toBeInTheDocument();
    expect(component.baseElement).toMatchSnapshot("prop text");
  });
  it("should return the state text", () => {
    // given
    const propText = "TestButton";

    // when
    const { getByText, baseElement, rerender } = render(
      <Button text={propText} />
    );

    fireEvent.click(getByText(propText));
    rerender(<Button text={propText} />);

    // then
    expect(getByText("Button cliked")).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot("state text");
  });
});
