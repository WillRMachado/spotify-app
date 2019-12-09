import React from "react"
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/Home/'
import SpotifyLogin from './pages/SpotifyLogin/'
// import Login from './pages/Login'
// import Dashboard from './pages/Dashboard'
// import New from './pages/New'

export default function Routes (){
    return(
        <BrowserRouter>
        <Switch>
            <Route path ="/" exact component={Home}/>
            <Route path ="/spotify-login" component={SpotifyLogin}/>
            {/* <Route path ="/dashboard" component={Dashboard}/>
            <Route path ="/new" component={New}/> */}
        </Switch>
        </BrowserRouter>

    )
}
