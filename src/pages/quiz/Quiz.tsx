import React, { useState } from 'react'
import QuestionCard from '../../components/QuestionCard'
import { fetchQuizQuestions, Difficulty, QuestionsState } from '../../API'

const Quiz = () => {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionsState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);
    const TOTAL_QUESTIONS = 10;

    // Methods :
    const startTrivia = async () => {
        setLoading(true);
        setGameOver(false);
        const newQuestions = await fetchQuizQuestions(
            TOTAL_QUESTIONS,
            Difficulty.EASY
        );
        console.log(newQuestions)
        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

    }

    const nextQuestion = () => {

    }
    return (
        <div>
            <h2>React Quiz</h2>
            <button className="start" onClick={startTrivia}>Start</button>
            {!gameOver ? <p className='score'>Score: {score}</p> : null}
            {loading ? <p>Loading Questions...</p> : null}
            {!loading && !gameOver && (
                <QuestionCard
                    questionNbr={number + 1}
                    totalQuestions={TOTAL_QUESTIONS}
                    question={questions[number].question}
                    answers={questions[number].answers}
                    userAnswer={userAnswers ? userAnswers[number] : undefined}
                    callback={checkAnswer}
                />
            )}
            <button className="next" onClick={nextQuestion}> Next Question </button></div>
    )
}

export default Quiz