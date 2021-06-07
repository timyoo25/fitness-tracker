import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Footer from "./components/Footer";
import ExampleLift from "./components/ExampleLift";
import ExampleCardio from "./components/ExampleCardio";
import NewLift from "./components/NewLift";
import NewCardio from "./components/NewCardio";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
      <Switch>
        <Route exact path="/weightlifting/new">
          <NewLift />
        </Route>
        <Route exact path="/cardio/new">
          <NewCardio />
        </Route>
        <Route exact path="/weightlifting/:id">
          <ExampleLift />
        </Route>
        <Route exact path="/cardio/:id">
          <ExampleCardio />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
