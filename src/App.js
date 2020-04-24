import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/home.js";
import { Hours } from "./components/hours.js";
import { Contact } from "./components/contact.js";
import { Form } from "./components/form.js";
import { Services } from "./components/services.js";
import { About } from "./components/about.js";
import { Products } from "./components/products.js";
import { Gallery } from "./components/gallery.js";
import "./styles/scss/style.scss";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/hours" component={Hours} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
