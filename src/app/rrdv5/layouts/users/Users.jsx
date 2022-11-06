import React from "react";
import { useParams, useHistory } from "react-router-dom";
import UserList from "./UserList.jsx";
import UsersNavBar from "./UsersNavBar.jsx";

const Users = () => {
    const { userId } = useParams();
    const history = useHistory();

    if (userId) history.replace("/users");

    return (
        <>
            <UsersNavBar/>
            <UserList/>
        </>
    );
};

export default Users;
