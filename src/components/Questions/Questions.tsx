import * as React from "react";
import {useEffect, useState} from "react";
import {useHistory} from "react-router";
import './Questions.css';
// @ts-ignore
import {AwesomeButton} from "react-awesome-button";

interface QuestionData {
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}

interface QuestionsProps {
    setScore: (newScore: number) => void;
    score: number
}

export const Questions = ({setScore, score}: QuestionsProps) => {
    const [questions, setQuestions] = useState<QuestionData[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    useEffect(fetchQuestions, []);
    let history = useHistory();
    const currentQuestion = questions[currentQuestionIndex];

    function fetchQuestions() {
        fetch('https://opentdb.com/api.php?amount=10&encode=base64')
            .then((response) => response.json())
            .then((myJson) => setQuestions(myJson.results));
    }

    function handleClick(answer: string) {
        if (answer === currentQuestion.correct_answer) {
            setScore(score + 5);
        }
        if (currentQuestionIndex !== questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            history.push("/summary");
        }
    }

    return <div>
        {questions.length > 0 ? <div className={'Question'}>
            <h1>{atob(currentQuestion.question)}</h1>
            {[...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
                .map((answer: string) => {
                    return <AwesomeButton
                        className={'Question__button-answer'}
                        key={answer}
                        onPress={() => handleClick(answer)}>{atob(answer)}</AwesomeButton>
                })}
        </div> : <h1>Loading...</h1>}
    </div>
};