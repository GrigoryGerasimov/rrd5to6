import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "./layouts/main/Main.jsx";
import Users from "./layouts/users/Users.jsx";
import User from "./layouts/users/user/User.jsx";
import EditPage from "./layouts/users/user/edit/EditPage.jsx";

const App = () => {
    return (
        <div className="container-fluid">
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/users/:userId/edit">
                    <EditPage/>
                </Route>
                <Route path="/users/:userId/profile">
                    {props => <User {...props}/>}
                </Route>
                <Redirect from="/users/:userId/*" to="/users/:userId/profile"/>
                <Route path="/users/:userId?" render={props => <Users {...props}/>}/>
                <Redirect from="/users/*" to="/users"/>
                <Redirect from="*" to="/"/>
            </Switch>
        </div>
    );
};

export default App;
