import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Header from "./pages/shared/Header/Header";
import MyOrders from "./pages/DashBoard/MyOrders/MyOrders";
import Pay from "./pages/DashBoard/Pay/Pay";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login/Login/Login";

function App() {
  return (
    <div className="App">
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
