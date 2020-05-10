import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";

import * as service from "../../services/userService";
import Users from "./Users";

describe("<Users />", () => {
  beforeEach(() => {
    const mockDataFromApi = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
          email: "atest@april.biz",
        },
        {
          id: 2,
          name: "Ervin Howell",
          email: "ztest@melissa.tv",
        },
      ],
    };
    jest
      .spyOn(service, "userService")
      .mockImplementationOnce(() => Promise.resolve(mockDataFromApi.data));
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return the list of users", async () => {
    // when
    const { getByTestId, getByText, rerender } = render(<Users />);
    await waitFor(() => {});
    rerender(<Users />);

    // then
    expect(getByTestId("user-list")).toMatchSnapshot("user list");
    expect(getByTestId("user-list")).toBeInTheDocument();
    expect(getByText("Leanne Graham")).toBeInTheDocument();
    expect(getByText("Ervin Howell")).toBeInTheDocument();
  });

  it("should order items by name", async () => {
    // when
    const { getByTestId, getByText, rerender, queryAllByTestId } = render(
      <Users />
    );
    await waitFor(() => {});
    const orderByName = getByTestId("order-by-name");

    await waitFor(() => fireEvent.click(orderByName));
    rerender(<Users />);

    const names = queryAllByTestId(/user-[0-2]/);

    // then
    expect(getByTestId("user-list")).toMatchSnapshot(
      "user list - ordered by name"
    );
    expect(getByTestId("user-list")).toBeInTheDocument();
    expect(names).toHaveLength(2);
    expect(names[0]).toHaveTextContent("Ervin Howell");
    expect(names[1]).toHaveTextContent("Leanne Graham");
    expect(getByText("Leanne Graham")).toBeInTheDocument();
    expect(getByText("Ervin Howell")).toBeInTheDocument();
  });

  it("should order items by email", async () => {
    // when
    const { getByTestId, getByText, rerender, queryAllByTestId } = render(
      <Users />
    );
    await waitFor(() => {});
    const orderByName = getByTestId("order-by-email");

    await waitFor(() => fireEvent.click(orderByName));
    rerender(<Users />);

    const names = queryAllByTestId(/user-[0-2]/);

    // then
    expect(getByTestId("user-list")).toMatchSnapshot(
      "user list - ordered by email"
    );
    expect(names).toHaveLength(2);
    expect(names[0]).toHaveTextContent("atest@april.biz");
    expect(names[1]).toHaveTextContent("ztest@melissa.tv");
    expect(getByText("Leanne Graham")).toBeInTheDocument();
    expect(getByText("Ervin Howell")).toBeInTheDocument();
  });
});
