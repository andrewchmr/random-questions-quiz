import React from "react";
import {Link} from "react-router-dom";
// @ts-ignore
import {AwesomeButton} from "react-awesome-button";

interface SummaryProps {
    setScore: (newScore: number) => void;
    score: number
}

export const Summary = ({setScore, score}: SummaryProps) => {
    return <div>
        <h1>Score: {score}</h1>
        <Link to={'/questions'} onClick={() => setScore(0)}>
            <AwesomeButton>Try again!</AwesomeButton>
        </Link>
    </div>
};