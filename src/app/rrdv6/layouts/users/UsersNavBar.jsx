import React from "react";
import { NavLink } from "react-router-dom";

const UsersNavBar = () => {
    return (
        <ul className="d-flex flex-row my-5 text-light">
            <NavLink to="/" className="mx-5 text-decoration-none text-warning h5">Home</NavLink>
            <NavLink to="1/profile" className="mx-5 text-decoration-none text-warning h5">User Page</NavLink>
        </ul>
    );
};

export default UsersNavBar;
