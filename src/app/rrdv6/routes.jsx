import React from "react";
import { Navigate } from "react-router-dom";
import Main from "./layouts/main/Main.jsx";
import EditPage from "./layouts/users/user/edit/EditPage.jsx";
import Users from "./layouts/users/Users.jsx";
import User from "./layouts/users/user/User";
import UserPage from "./layouts/users/user/UserPage.jsx";
import UserList from "./layouts/users/UserList";

export const routes = [
    { path: "", element: <Main/> },
    { path: "users", element: <Users/>, children: [
        { path: "", element: <UserList/> },
        { path: ":userId", element: <User/>, children: [
            { path: "profile", element: <UserPage/> },
            { path: "edit", element: <EditPage/> },
            { path: "*", element: <Navigate to="profile" /> }
        ] }] },
    { path: "*", element: <Navigate to="/"/> }
];
