import * as React from "react";
import {Link} from "react-router-dom";
// @ts-ignore
import {AwesomeButton} from "react-awesome-button";

export const StartScreen = () => {
    return <div className={'StartScreen'}>
        <h1>Random Questions Quiz</h1>
        <Link to={'/questions'}>
            <AwesomeButton type="primary" size={'large'}>Start</AwesomeButton>
        </Link>
    </div>
};