import React from "react";
import { NavLink } from "react-router-dom";

const MainNavBar = () => {
    return (
        <ul className="d-flex flex-row my-5 text-light">
            <NavLink to="/" className="mx-5 text-decoration-none text-warning h5">Home</NavLink>
            <NavLink to="/users" className="mx-5 text-decoration-none text-warning h5">Users</NavLink>
        </ul>
    );
};

export default MainNavBar;
