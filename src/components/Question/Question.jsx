import './Question.css';
import Answer from "../Answer/Answer";

export default function Question({question, questionsLength, answerRefs}) {
    const {id, questionText, options} = question;
    return(
        <div className="card">
            <span className="question-count">Question {id}/{questionsLength}</span>
            <div className="question">{questionText}</div>
            {options.map((eachOption, index) => (<Answer eachOption={eachOption}
                                                         index={index}
                                                         answerRefs={answerRefs}
                                                    key={index}/>))}
        </div>
    )
}