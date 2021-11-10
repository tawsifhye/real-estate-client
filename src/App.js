import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AuthProvider from "./Context/AuthProvider";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound"
import Home from "./components/Home/Home";
import Booking from "./components/Booking/Booking";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ExploreServices from "./components/ExploreServices/ExploreServices";

function App() {

  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path="/exploreproperties">
              <ExploreServices></ExploreServices>
            </Route>
            <PrivateRoute path='/booking/:_id'>
              <Booking></Booking>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
