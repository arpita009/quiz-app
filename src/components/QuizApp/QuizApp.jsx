import './QuizApp.css';
import Question from "../Question/Question";
import {useState, useRef} from "react";

export default function QuizApp() {
    const answerRefs = useRef([]);
    const allQuestions = [
        {id:1,
            questionText: 'What is JSX in React?',
            options: [
                {optionText: 'JavaScript Extension', isCorrect: false},
                {optionText: 'JavaScript XML', isCorrect: true},
                {optionText: 'JavaScript eXtended', isCorrect: false},
                {optionText: 'JavaScript eXpress', isCorrect: false},
            ]
        },
        {id:2,
            questionText: 'Which lifecycle method in React is invoked ' +
                'immediately after a component is inserted into the DOM?',
            options: [
                {optionText: 'componentDidMount()', isCorrect: true},
                {optionText: 'componentWillMount()', isCorrect: false},
                {optionText: 'componentDidUpdate()', isCorrect: false},
                {optionText: 'componentWillUpdate()', isCorrect: false},
            ]
        },
        {id:3,
            questionText: 'What does the useState hook in React do? ',
            options: [
                {optionText: 'Allows you to perform side effects in function components', isCorrect: false},
                {optionText: 'Manages state in class components', isCorrect: false},
                {optionText: 'Declares a new state variable in function components', isCorrect: true},
                {optionText: 'Renders JSX elements in function components', isCorrect: false},
            ]
        },
    ];
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const handleNextQuestion = () =>{
        const allAnswerRefs = answerRefs.current;
        console.log('AnsRefs before', allAnswerRefs)
        allAnswerRefs.forEach(answerRef => {
            answerRef.style.color = 'black'; // Reset color to default
        });
        console.log('AnsRefs after', allAnswerRefs)
        if(currentQuestion < allQuestions.length-1) {
            setCurrentQuestion(currentQuestion+1);
        }
    }
    return(
        <>
            <div className="card-container">
                <Question question={allQuestions[currentQuestion]}
                          questionsLength = {allQuestions.length}
                          answerRefs={answerRefs}
                />
                <div className='next-btn'>
                    <button className="next-button"
                            onClick={handleNextQuestion}
                    >Next</button>
                </div>
            </div>
        </>
    )
}