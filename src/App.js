import { Route, Switch } from "react-router-dom";

import Home from "./layout/Home";
import Footer from "./layout/Footer";
import LiftHistory from "./components/LiftHistory";
import CardioHistory from "./components/CardioHistory";
import Navbar from "./layout/Navbar";
import Lifts from "./components/Lifts";
import Cardios from "./components/Cardios";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/weightlifting">
          <Lifts />
        </Route>
        <Route exact path="/cardio">
          <Cardios />
        </Route>
        <Route exact path="/weightlifting/:id">
          <LiftHistory />
        </Route>
        <Route exact path="/cardio/:id">
          <CardioHistory />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
