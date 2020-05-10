import React, { useState, useEffect } from "react";
import { userService } from "../../services/userService";

import * as Styled from "./Users.style";

const Users = () => {
  const [usersState, setUsersState] = useState([]);

  const orderBy = (list, param) => {
    const compare = (a, b) => {
      const propA = a[param].toString().toUpperCase();
      const propB = b[param].toString().toUpperCase();
      let comparison = 0;

      if (propA > propB) comparison = 1;
      if (propA < propB) comparison = -1;

      return comparison;
    };

    const orderedList = list.sort(compare);

    setUsersState([...orderedList]);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await userService();
      setUsersState(users);
    };
    fetchUsers();
  }, []);

  return (
    <Styled.ListWrapper>
      <Styled.ListActions>
        <Styled.Button
          data-testid="order-by-name"
          onClick={() => orderBy(usersState, "name")}
        >
          Order By: name
        </Styled.Button>
        <Styled.Button
          data-testid="order-by-email"
          onClick={() => orderBy(usersState, "email")}
        >
          Order By: email
        </Styled.Button>
      </Styled.ListActions>
      <ul data-testid="user-list">
        {usersState.map((user) => (
          <li key={user.id}>
            {user.name} <small>{user.email}</small>
          </li>
        ))}
      </ul>
    </Styled.ListWrapper>
  );
};

export default Users;
