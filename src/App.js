import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import { liftHistory, cardioHistory } from "./services/api";

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
  const [merged, setMerged] = useState([]);
  const [uniqueDates, setUniqueDates] = useState([]);

  useEffect(() => {
    const fetchWorkout = async () => {
      const resLift = await liftHistory();
      const resCardio = await cardioHistory();
      const mergedArr = resLift &&
        resCardio && [...resLift.records, ...resCardio.records];
      mergedArr.sort((a, b) => {
        return new Date(a.fields.date) - new Date(b.fields.date);
      });
      mergedArr && setMerged(mergedArr);
      const dates = [];
      mergedArr.forEach((workout) => {
        if (!dates.includes(workout.fields.date)) {
          dates.push(workout.fields.date);
        }
      });
      setUniqueDates(dates);
    };
    fetchWorkout();
  }, []);

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
        <Route exact path="/dates">
          <LiftingDates uniqueDates={uniqueDates} />
        </Route>
        <Route exact path="/workouthistory/:date">
          <WorkoutHistory merged={merged} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
