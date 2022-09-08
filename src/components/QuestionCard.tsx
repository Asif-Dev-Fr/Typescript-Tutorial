import React from 'react'

// Le nom peut être différent
type Props = {
    question: string;
    // array of string = string[]
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNbr: number;
    totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNbr,
    totalQuestions,
}) =>
(
    <div>
        <p className='number'>
            Question: {questionNbr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }}></p>
        <div>
            {answers.map((answer, key) => (
                <div key={key}>
                    <button disabled={userAnswer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                    </button>
                </div>
            ))}
        </div>
    </div>
)



export default QuestionCard