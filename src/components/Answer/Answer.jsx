import './Answer.css';
import {useRef, useEffect} from "react";

export default function Answer({eachOption, index, answerRefs}){
    const answerRef = useRef(null);

    useEffect(() => {
        if (answerRef.current) {
            answerRefs.current.push(answerRef.current);
        }
    }, []);
    const handleOptionClick = (eachOption) => {
        if(eachOption.isCorrect){
            console.log('Right answer!');
            answerRef.current.style.color = 'green';
        } else {
            answerRef.current.style.color = 'red';
        }
    }
    return(
        <div className="answer" key={index} ref={answerRef}
             onClick={() => handleOptionClick(eachOption)}>
            <div className="answer-option">{eachOption.optionText}</div>
        </div>
    )
}