import React, {useState} from 'react';
import './App.css';
import {StartScreen} from "./components/StartScreen/StartScreen";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Questions} from "./components/Questions/Questions";
import {Summary} from "./components/Summary/Summary";

const App = () => {
    const [score, setScore] = useState<number>(0);

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <StartScreen/>
                    </Route>
                    <Route path="/questions">
                        <Questions setScore={setScore} score={score}/>
                    </Route>
                    <Route path="/summary">
                        <Summary setScore={setScore} score={score}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
