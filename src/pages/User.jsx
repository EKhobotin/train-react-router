import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserById } from "../services/api";

const User = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserById(userId).then((res) => {
      setUser(res);
      console.log(res);
    });
  }, [userId]);

  //так як за замовчуванням юзер це пустий об'єкт, то поки він не підвантажиться відображаємо лоадінг
  if (!user) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h2>UserDetails #{userId}</h2>
      <hr />
      <img src={user.image} alt="user avatar" />
      <p>
        {user.firstName} {user.lastName}
      </p>
      <p>{user.email}</p>
      <p>{user.age}</p>
      <p>{user.phone}</p>
    </div>
  );
};

export default User;
