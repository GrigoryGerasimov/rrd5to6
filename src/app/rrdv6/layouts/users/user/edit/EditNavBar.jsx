import React from "react";
import { NavLink, useParams } from "react-router-dom";

const EditNavBar = () => {
    const { userId } = useParams();

    return (
        <ul className="d-flex flex-row my-5 text-light">
            <NavLink to="../profile" className="mx-5 text-decoration-none text-warning h5">User Page</NavLink>
            <NavLink to={`../../${Number(userId) + 1}/profile`} className="mx-5 text-decoration-none text-warning h5">Another User Page</NavLink>
            <NavLink to="../.." className="mx-5 text-decoration-none text-warning h5">Users List</NavLink>
        </ul>
    );
};

export default EditNavBar;
