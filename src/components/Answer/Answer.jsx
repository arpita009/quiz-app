import './Answer.css';

export default function Answer({eachOption, index}){
    const handleOptionClick = (eachOption) => {
        if(eachOption.isCorrect){
            console.log('Right answer!');
        }
    }
    return(
        <div className="answer" key={index} onClick={() => handleOptionClick(eachOption)}>
            <div className="answer-option">{eachOption.optionText}</div>
        </div>
    )
}