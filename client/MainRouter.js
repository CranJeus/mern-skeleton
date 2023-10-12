import React from 'react'
import { Routes, Route } from 'react-router-dom';


import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin';
import Profile from './user/Profile';
import EditProfile from './user/EditProfile';
import Menu from './core/Menu';
import PrivateRoute from './auth/PrivateRoute';


const MainRouter = () => {
    return (<div>
        <Menu>
        </Menu>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/users" element={<Users />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/signin" element={<Signin />}/>
            <Route path="/user/:userId" element={<Profile />}/>
            <Route exact path='/' element={<PrivateRoute/>}>
                <Route path="/user/edit/:userId" element={< EditProfile  />}/>
            </Route>
        </Routes>
    </div>
    )
}
export default MainRouter

// <PrivateRoute path="/user/edit/:userId" element={< EditProfile />}/>