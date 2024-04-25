import './App.css';

function App() {
  return (
      <div className="card-container">
          <div className="card">
              <span className="question-count">Question</span>
              <div className="question">Question goes here</div>
              <div className="answer">
                  <div className="answer-option">Option 1</div>
                  <div className="answer-option">Option 2</div>
                  <div className="answer-option">Option 3</div>
              </div>
              <div className='next-btn'>
                  <button className="next-button">Next</button>
              </div>
          </div>
      </div>
  )
}

export default App
