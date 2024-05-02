import './Question.css';
import Answer from "../Answer/Answer";
import {useState} from "react";

export default function Question({question, questionsLength, isDisabled, handleAnswerOptionDisabled, answerRefs}) {
    const {id, questionText, options} = question;
    const [score, setScore] = useState(0);
    const handleScore =() => {
        setScore(prevState => prevState+1);
    }
    return(
        <div className="card">
            <div className="question-header">
                <span className="question-count">Question {id}/{questionsLength}</span>
                <span>Score: {score}</span>
            </div>


            <div className="question">{questionText}</div>
            {options.map((eachOption, index) => (<Answer eachOption={eachOption} isAnswerOptionDisabled={isDisabled}
                                                         index={index} optionDisabled={handleAnswerOptionDisabled}
                                                         answerRefs={answerRefs}
                                                         handleScore={handleScore}
                                                    key={index}/>))}
        </div>
    )
}