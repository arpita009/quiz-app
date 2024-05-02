import './Answer.css';

export default function Answer({eachOption, index,optionDisabled, isAnswerOptionDisabled}){
    const classNames = `answer ${isAnswerOptionDisabled ? 'disabled-div' : ''}`;
    const handleOptionClick = (eachOption) => {
        optionDisabled();
        if(eachOption.isCorrect){
            console.log('Right answer!');
        } else {
            console.log('wrong answer!');
        }
    }
    return(
        <div className={classNames} key={index}
             onClick={() => handleOptionClick(eachOption)}>
            <div className="answer-option">{eachOption.optionText}</div>
        </div>
    )
}