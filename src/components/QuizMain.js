import React, { Component } from "react";
import Question from "./question/Question";
import Answer from "./answer/Answer";
import "./QuizMain.css";

export default class Quiz extends Component {
  // initiating the local state

  state = {
    quiestions: {
      1: 'What US city is known as the "birthplace of jazz"?',
      2: "What is the capital of Greece?",
      3: "What planet gave birth to Superman?",
    },
    answers: {
      1: {
        1: "Chicago",
        2: "New Orleans",
        3: "New York",
      },
      2: {
        1: "Athens",
        2: "Patras",
        3: "Kalamata",
      },
      3: {
        1: "Krypton",
        2: "Mars",
        3: "Saturn",
      },
    },
    correctAnswers: {
      1: "2",
      2: "1",
      3: "1",
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0,
  };

  // the method that checks the correct answer
  checkAnswer = (answer) => {
    const { correctAnswers, step, score } = this.state;
    if (answer === correctAnswers[step]) {
      this.setState({
        score: score + 1,
        correctAnswer: correctAnswers[step],
        clickedAnswer: answer,
      });
    } else {
      this.setState({
        correctAnswer: 0,
        clickedAnswer: answer,
      });
    }
  };

  // method to move to the next question
  nextStep = (step) => {
    this.setState({
      step: step + 1,
      correctAnswer: 0,
      clickedAnswer: 0,
    });
  };

  render() {
    let { quiestions, answers, correctAnswer, clickedAnswer, step, score } =
      this.state;
    var style = step < 4 ? { "--value": step } : { "--value": score };

    const ytLinks = [
      "https://www.youtube.com/embed/E7wJTI-1dvQ",
      "https://www.youtube.com/embed/E7wJTI-1dvQ",
      "https://www.youtube.com/embed/E7wJTI-1dvQ",
      "https://www.youtube.com/embed/E7wJTI-1dvQ",
      "https://www.youtube.com/embed/E7wJTI-1dvQ",
    ];
    return (
      <div className="Content-container">
        <div className="Content">
          <div className="flex center">
            {step > 3 && (
              <p style={{ fontWeight: "bold", marginRight: "10px" }}>
                Final Score
              </p>
            )}
            <div
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="3"
              style={style}
            ></div>
          </div>
          {step <= Object.keys(quiestions).length ? (
            <>
              <Question question={quiestions[step]} />
              <Answer
                answer={answers[step]}
                step={step}
                checkAnswer={this.checkAnswer}
                correctAnswer={correctAnswer}
                clickedAnswer={clickedAnswer}
              />
              <button
                className="NextStep"
                disabled={
                  clickedAnswer && Object.keys(quiestions).length >= step
                    ? false
                    : true
                }
                onClick={() => this.nextStep(step)}
              >
                Next
              </button>
            </>
          ) : (
            <div className="finalPage">
              <h1>You have completed the quiz!</h1>
              <p>
                Your score is: {score} of {Object.keys(quiestions).length}
              </p>
              <p>Thank you!</p>
              <p>For more learning refer these links!</p>
              <ul
                className="frames flex justify-space-between"
                style={{ marginTop: "30px",flexWrap:'wrap' }}
              >
                {ytLinks.map((link, i) => (
                  <li style={{marginBottom:'10px'}} key={`ytlink${i}`}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}
