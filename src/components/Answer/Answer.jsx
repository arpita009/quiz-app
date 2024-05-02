import './Answer.css';
import {useRef} from "react";

export default function Answer({eachOption, index,optionDisabled, isAnswerOptionDisabled}){
    const classNames = `answer ${isAnswerOptionDisabled ? 'disabled-div' : ''}`;
    const optionRef = useRef(null);
    const handleOptionClick = (eachOption) => {
        optionDisabled();
        if(eachOption.isCorrect){
            console.log('Right answer!');
            optionRef.current.style.color = 'green';
        } else {
            console.log('wrong answer!');
            optionRef.current.style.color = 'red';
        }
    }
    return(
        <div className={classNames} key={index}
             onClick={() => handleOptionClick(eachOption)}>
            <div className="answer-option" ref={optionRef}>{eachOption.optionText}</div>
        </div>
    )
}