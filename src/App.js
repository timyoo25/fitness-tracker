import { Route, Switch } from "react-router-dom";

import Home from "./layout/Home";
import Footer from "./layout/Footer";
import LiftHistory from "./components/LiftHistory";
import CardioHistory from "./components/CardioHistory";
import Navbar from "./layout/Navbar";
import Lifts from "./components/Lifts";
import Cardios from "./components/Cardios";
import LiftingDates from "./components/LiftingDates";
import WorkoutHistory from "./components/WorkoutHistory";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/lifting/new">
          <Lifts />
        </Route>
        <Route exact path="/cardio/new">
          <Cardios />
        </Route>
        <Route exact path="/lifting/history">
          <LiftHistory />
        </Route>
        <Route exact path="/cardio/history">
          <CardioHistory />
        </Route>
        {/*<Route exact path="/dates">
          <LiftingDates />
        </Route>
        <Route exact path="/workouthistory/:date">
          <WorkoutHistory />
        </Route> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
