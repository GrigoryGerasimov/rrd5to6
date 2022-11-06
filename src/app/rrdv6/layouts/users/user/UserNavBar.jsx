import React from "react";
import { NavLink } from "react-router-dom";

const UserNavBar = () => {
    return (
        <ul className="d-flex flex-row my-5 text-light">
            <NavLink to="../.." className="mx-5 text-decoration-none text-warning h5">Users List</NavLink>
            <NavLink to="../edit" className="mx-5 text-decoration-none text-warning h5">Edit Page</NavLink>
        </ul>
    );
};

export default UserNavBar;
