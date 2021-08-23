import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import routes from "./Routes/routes";

function App() {
  let initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <Router>
      <NavBar />
      <Switch>
        {/*<Route path="/" exact component={Home} />*/}
        {routes.map((route, key) => {
          return (
            <Route
              key={key}
              path={route.path}
              exact={route.exact}
              component={route.component}
              render={(props) => route.render(props, count, setCount)}
            />
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
