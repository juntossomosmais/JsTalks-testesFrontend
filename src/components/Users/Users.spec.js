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
          username: "Bret",
          email: "atest@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: { lat: "-37.3159", lng: "81.1496" },
          },
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
          },
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "ztest@melissa.tv",
          address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: { lat: "-43.9509", lng: "-34.4618" },
          },
          phone: "010-692-6593 x09125",
          website: "anastasia.net",
          company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains",
          },
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
