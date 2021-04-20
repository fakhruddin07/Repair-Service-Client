import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import UserDashboard from "./components/User/UserDashBoard/UserDashBoard";
import ReviewData from "./components/User/ReViewData/ReviewData";
import TotalOrder from "./components/Admin/TotalOrder/TotalOrder";
import Login from "./components/Login/Login";
import ManageData from "./components/Admin/ManageData/ManageData";
import BookingData from "./components/User/BookIngData/BookingData";
import Administrate from "./components/Admin/Administrate/Administrate";

export const UserContext = createContext();
export const ServiceContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({
    // price : '',
    // name : '' , 
    // email : '',
    // productName : '',
    // productWeight : '',
    // productImg : ''
  });

  const [service, setService] = useState({
    name: "",
    price: ""
  });

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <ServiceContext.Provider value={[service, setService]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/admin">
              <Administrate></Administrate>
            </Route>
            <PrivateRoute path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute path="/user">
              <UserDashboard></UserDashboard>
            </PrivateRoute>
            <PrivateRoute path="/user/:id">
              <UserDashboard></UserDashboard>
            </PrivateRoute>
            <PrivateRoute path="/review">
              <ReviewData></ReviewData>
            </PrivateRoute>
            <PrivateRoute path="/totalOrder">
               <TotalOrder></TotalOrder>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/manage">
            <ManageData></ManageData>
          </Route>
          <PrivateRoute>
             <BookingData></BookingData>
          </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </ServiceContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
