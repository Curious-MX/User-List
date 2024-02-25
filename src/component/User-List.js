import React, { useEffect, useState } from "react";
import axios from "axios";

import "./style/style.css";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getUsers = () => {
        axios.get("https://randomuser.me/api/?results=10")
            .then((res) => {
                setUsers(res.data.results);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
                setIsLoading(false);
            });
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="wrapper">
            {isLoading ? (
                <div className="loading" />
            ) : (
                <>
                    {users.map((user, index) => (
                        <div className="user" key={index}>
                            <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
                            <div>name : {`${user.name.first} ${user.name.last}`}</div>
                            <div>phone number : {user.phone}</div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default UserList;