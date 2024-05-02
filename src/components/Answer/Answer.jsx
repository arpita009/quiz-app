import './Answer.css';
import {useRef, useEffect} from "react";

export default function Answer({eachOption, index,optionDisabled, isAnswerOptionDisabled, answerRefs}){
    const classNames = `answer ${isAnswerOptionDisabled ? 'disabled-div' : ''}`;
    const optionRef = useRef(null);

    useEffect(() => {
        answerRefs.current.push(optionRef.current);
    }, []);

    const handleOptionClick = (eachOption) => {
        optionDisabled();
        if(eachOption.isCorrect){
            optionRef.current.style.color = 'green';
        } else {
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