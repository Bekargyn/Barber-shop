import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from "./components/home";
import { Hours } from "./components/hours";
import { Contact } from "./components/contact";
import { Form } from "./components/form";
import { Services } from "./components/services";
import { About } from "./components/about";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/hours" component={Hours} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/form" component={Form} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Layout>
      </Router>
    </React.Fragment>
  );
}

export default App;
