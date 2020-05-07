import React from "react"
import {Link, Route, Switch} from 'react-router-dom'
import {localRoutes} from "../../store/index";
import Layout from "../Layout";
import Homepage from "../Homepage";
import Signup from "../Forms/Signup";
import Login from "../Forms/Login";




const ContentSwitch = () => {
    return <Switch>
        <Route exact={true} path="/" component={Homepage}/>
        <Route path={localRoutes.homepage} component={Homepage}/>
        <Route path={localRoutes.signup} component={Signup}/>
        <Route path={localRoutes.login} component={Login}/>
        <Route component={NoMatch}/>
    </Switch>
}

const NoMatch = () => (
    <Layout>
        <h2>Oops nothing here!!</h2>
        <Link to="/">Take me home</Link>
    </Layout>
)

export default ContentSwitch