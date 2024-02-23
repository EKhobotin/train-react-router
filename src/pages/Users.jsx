import React, { useEffect, useState } from "react";
import { fetchUsers } from "../services/api";
import { Link } from "react-router-dom";

export const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers().then((res) => setUsers(res));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={user.id.toString()}>
              {user.lastName} {user.firstName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
