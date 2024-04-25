import './Question.css';
import Answer from "../Answer/Answer";

export default function Question({question}) {
    const {id, questionText, options} = question;
    return(
        <div className="card">
            <span className="question-count">Question {id}</span>
            <div className="question">{questionText}</div>
            {options.map((eachOption, index) => (<Answer eachOption={eachOption}
                                                         index={index}
                                                    key={index}/>))}
        </div>
    )
}