import React, { FC } from "react";
import { Axios } from "axios";
import { UsersPageProps } from "./types/user.types";

const User: FC<UsersPageProps> = ({ props: { users } }) => {
  return (
    <div className="container-fluid">
      <ul className="list-group">
        {users?.map((user) => {
          return (
            <li
              className="list-group-item"
              key={`${user?.id}-${user?.username}`}
            >
              {user?.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default User;

export async function getInitialProps(axios: Axios) {
  try {
    const { data } = await axios.get("/users");
    return { props: { users: data } };
  } catch (error) {
    console.error(error);
  }
}
