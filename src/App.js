import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Header from "./pages/shared/Header/Header";
import MyOrders from "./pages/DashBoard/MyOrders/MyOrders";
import Pay from "./pages/DashBoard/Pay/Pay";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login/Login/Login";
import Explore from "./pages/Explore/Explore";
import AuthProvider from "./contexts/AuthProvider";
import Register from "./pages/Login/Register/Register";
import Orders from "./pages/DashBoard/MyOrders/Orders";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/pay">
              <Pay></Pay>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/order">
              <Orders></Orders>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
