import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import routes from "./Routes/routes";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        {/*<Route path="/" exact component={Home} />*/}
        {routes.map((route, key) => {
          <Route
            key={key}
            path={route.path}
            exact={route.exact}
            component={route.component}
            render={(props) => route.render(props)}
          />;
        })}
      </Switch>
    </Router>
  );
}

export default App;
