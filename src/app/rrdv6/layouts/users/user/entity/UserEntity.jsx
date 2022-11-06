import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userService } from "../../../../../services/userService";

const UserEntity = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [isLoading, setLoading] = useState(true);

    const getUserById = async id => {
        try {
            const receivedUser = await userService.getById(id);
            setUser(receivedUser);
            setLoading(false);
        } catch (error) {
            navigate(-1, { replace: true });
        }
    };

    useEffect(() => {
        getUserById(userId);
    }, []);

    return !isLoading ? (
        <div className="h3 text-light">
            <h1>{user.name}</h1>
            <ul>
                <li>Username: {user.username}</li>
                <li>Phone: {user.phone}</li>
                <li>E-mail: {user.email}</li>
                <li>Company: {user.company.name}</li>
                <li>Postal Address: {`${user.address.street} ${user.address.suite} ${user.address.zipcode} ${user.address.city}`}</li>
                <li>Web: {user.website}</li>
            </ul>
        </div>
    ) : <p className="h5 text-light">Loading...</p>;
};

export default UserEntity;
