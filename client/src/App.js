import React from 'react'
import Helper from './Helper'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import HomeScreen from "./components/HomeScreen/HomeScreen"
import Signup from "./components/Auth/Signup"

const App = () => {
  return (
    <div>
        {/* <Helper/>
        <BrowserRouter>
            <Switch>
              <Route exact path='/' component={HomeScreen}/>
            </Switch>
        </BrowserRouter> */}
        <Signup/>
    </div>
  
  )
}

export default App
