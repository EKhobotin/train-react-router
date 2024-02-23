import React, { useContext, useState } from "react";
// import { TodoList } from "./components/TodoList/TodoList";
// import { Counter } from "./components/Counter/Counter";
// import { ColorPicker } from "./components/ColorPicker/ColorPicker";
// import colors from "./assets/colors.json";
// import { RegisterForm } from "./components/RegisterForm/RegisterForm";
// import { RegisterFormUncontrolled } from "./components/RegisterForm/RegisterFormUncontrolled";
// import { Employee } from "./components/Employee/Employee";
// import Modal from "./components/Modal/Modal";
// import { Posts } from "./components/Posts/Posts";
// import { UserContext } from "./context/Context.Provider";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import Layout from "./components/Layout";
import { Users } from "./pages/Users";
import User from "./pages/User";
import { Info } from "./components/UserInfo/Info";
import { Posts } from "./components/UserInfo/Posts";
import Modal from "./components/Modal/Modal";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:userId" element={<User />}>
            <Route path="info" element={<Info />} />
            <Route path="posts" element={<Posts />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
