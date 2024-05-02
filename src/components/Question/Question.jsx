import './Question.css';
import Answer from "../Answer/Answer";

export default function Question({question, questionsLength, isDisabled, handleAnswerOptionDisabled, answerRefs}) {
    const {id, questionText, options} = question;
    return(
        <div className="card">
            <span className="question-count">Question {id}/{questionsLength}</span>
            <div className="question">{questionText}</div>
            {options.map((eachOption, index) => (<Answer eachOption={eachOption} isAnswerOptionDisabled={isDisabled}
                                                         index={index} optionDisabled={handleAnswerOptionDisabled}
                                                         answerRefs={answerRefs}
                                                    key={index}/>))}
        </div>
    )
}