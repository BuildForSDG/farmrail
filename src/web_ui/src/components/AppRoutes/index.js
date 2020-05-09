import React from "react"
import { Link, Route, Switch } from 'react-router-dom'
import { localRoutes } from "../../store/index";
import Homepage from "../Homepage";
import Dashboard from "../Dashboard";
import Signup from "../Forms/Signup";
import Login from "../Forms/Login";


const NoMatch = () => (
    <div>
        <h2>Oops nothing here!!</h2>
        <Link to="/">Take me home</Link>
    </div>
)


const ContentSwitch = () => {
    return <Switch>component={NoMatch}
        <Route exact={true} path="/" component={Homepage} />
        <Route path={localRoutes.dashboard} component={Dashboard} />
        <Route path={localRoutes.signup} component={Signup} />
        <Route path={localRoutes.login} component={Login} />
        <Route component={NoMatch} />
    </Switch>
}



export default ContentSwitch