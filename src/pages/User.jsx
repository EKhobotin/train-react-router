import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet, useNavigate } from "react-router-dom";
import { fetchUserById } from "../services/api";

const User = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserById(userId).then((res) => {
      setUser(res);
      console.log(res);
    });
  }, [userId]);

  const handleBack = () => {
    navigate("/users");
  };

  //так як за замовчуванням юзер це пустий об'єкт, то поки він не підвантажиться відображаємо лоадінг
  if (!user) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <button onClick={handleBack}>Back</button>
      <h2>UserDetails #{userId}</h2>
      <hr />
      <img src={user.image} alt="user avatar" />
      <p>
        {user.firstName} {user.lastName}
      </p>
      <p>{user.email}</p>
      <p>{user.age}</p>
      <p>{user.phone}</p>
      <Link to="info">Info</Link>
      <Link to="posts">Posts</Link>
      <Outlet />
    </div>
  );
};

export default User;
