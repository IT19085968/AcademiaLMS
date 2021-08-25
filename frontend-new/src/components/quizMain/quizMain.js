import React, { Component } from "react";
import axios from "axios";
import "./quizMain.css";
import Question from "../question/question";
import Answer from "../answer/Answer";

export default class quizMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionlists: [],
      questions: {
        1: "What US city is known as the 'birthplace of jazz'?",
        2: "What is the capital of Greece?",
        3: "What planet gave birth to Superman?",
      },
      answers: {
        1: {
          1: "Chicago",
          2: "new Orleans",
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
  }

  //   componentWillMount() {
  //     axios
  //       .get("http://localhost:8080/quiz/6126ae423dff3e4dbe373abd")
  //       .then((res) => {
  //         this.setState(
  //           {
  //             questionlists: res.data.questions,
  //           },
  //           () => {
  //             let quests = [];
  //             let cAnswers = [];
  //             let aAnsws = [];
  //             this.state.questionlists.map((item, index) => {
  //               let qz = item.question;
  //               let cnsw = item.correctAnswer;
  //               let answs = item.answers;

  //               quests.push(qz);
  //               cAnswers.push(cnsw);
  //               aAnsws.push(answs);
  //             });
  //             this.setState({
  //               questions: quests,
  //               answers: aAnsws,
  //               correctAnswers: cAnswers,
  //             });
  //           }
  //         );
  //         console.log(res.data);
  //         console.log(this.state.questions);
  //         console.log(this.state.answers);
  //         console.log(this.state.correctAnswers);
  //       });
  //   }

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

  nextStep = (step) => {
    this.setState({
      step: step + 1,
      correctAnswer: 0,
      clickedAnswer: 0,
    });
  };
  render() {
    let { questions, answers, correctAnswer, clickedAnswer, step, score } =
      this.state;
    return (
      <div className="quizContent">
        {step <= Object.keys(questions).length ? (
          <>
            <Question question={questions[step]} />
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
                clickedAnswer && Object.keys(questions).length >= step
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
              Your score is: {score} of {Object.keys(questions).length}
            </p>
            <p>Thank you!</p>
          </div>
        )}
      </div>
    );
  }
}
