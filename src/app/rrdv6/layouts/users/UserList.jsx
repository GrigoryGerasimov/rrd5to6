import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { userService } from "../../../services/userService.js";
import UsersNavBar from "./UsersNavBar.jsx";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getUsers = async() => {
        try {
            const receivedUsers = await userService.getFirstTen();
            setUsers(receivedUsers);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return !isLoading ? (
        <>
            <UsersNavBar/>
            <ol>
                {users.map(user => (
                    <li key={user.id}>
                        <Link to={`${user.id}/profile`} className="h5 text-light text-decoration-none">
                            {user.name}
                        </Link>
                    </li>
                ))}
            </ol>
        </>
    ) : <p className="h5 text-light">Loading...</p>;
};

export default UserList;
