import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes.jsx";

const App = () => {
    return (
        <div className="container-fluid">
            {useRoutes(routes)}
        </div>
    );
};

export default App;
