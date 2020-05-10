import axios from "axios";

import { userService } from "./userService";

jest.mock("axios");

describe("userService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should return a list of users", async () => {
    // given
    const mockDataFromApi = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
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
      ],
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(mockDataFromApi));

    // when
    const response = await userService();

    // then
    expect(response).toEqual(mockDataFromApi.data);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );
  });

  it("should return error from api", async () => {
    // given
    const errorMessage = "Network Error";
    axios.get.mockImplementationOnce(() => Promise.reject(errorMessage));

    // when
    const response = await userService();

    // then
    expect(response).toEqual(errorMessage);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
