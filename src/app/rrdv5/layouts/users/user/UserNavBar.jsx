import React from "react";
import { NavLink, useParams } from "react-router-dom";

const UserNavBar = () => {
    const { userId } = useParams();

    return (
        <ul className="d-flex flex-row my-5 text-light">
            <NavLink to="/users" className="mx-5 text-decoration-none text-warning h5">Users List</NavLink>
            <NavLink to={`/users/${userId}/edit`} className="mx-5 text-decoration-none text-warning h5">Edit Page</NavLink>
        </ul>
    );
};

export default UserNavBar;
