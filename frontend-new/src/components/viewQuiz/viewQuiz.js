import React from "react";
import axios from "axios";
import "./viewQuiz.css";

class ViewQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
    // this.onChangeProposalID = this.onChangeProposalID.bind(this);
    this.state = {
      questions: "",
      quizId: props,
      examId: "",
      question1: "",
      question2: "",
      question3: "",
      firstAnswers: [],
      secondAnswers: [],
      thirdAnswers: [],
      answers1: "",
      answers2: "",
      answers3: "",
      answers4: "",
      answers5: "",
      answers6: "",
      answers7: "",
      answers8: "",
      answers9: "",
      correctAnswer1: "",
      correctAnswer2: "",
      correctAnswer3: "",
      disabled: true,
    };
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentWillMount() {
    axios
      .get("http://localhost:8080/quiz/61279e68495de239a7eccaca")
      .then((res) => {
        this.setState({
          questions: res.data.questions,
          question1: res.data.questions[0].question,
          firstAnswers: res.data.questions[0].answers,
          answers1: res.data.questions[0].answers[0],
          answers2: res.data.questions[0].answers[1],
          answers3: res.data.questions[0].answers[2],
          correctAnswer1: res.data.questions[0].correctAnswer,
          question2: res.data.questions[1].question,
          secondAnswers: res.data.questions[1].answers,
          answers4: res.data.questions[1].answers[0],
          answers5: res.data.questions[1].answers[1],
          answers6: res.data.questions[1].answers[2],
          correctAnswer2: res.data.questions[1].correctAnswer,
          question3: res.data.questions[2].question,
          thirdAnswers: res.data.questions[2].answers,
          answers7: res.data.questions[2].answers[0],
          answers8: res.data.questions[2].answers[1],
          answers9: res.data.questions[2].answers[2],
          correctAnswer3: res.data.questions[2].correctAnswer,
        });
      });
  }

  render() {
    const { examId } = this.props;
    return (
      <div className="quizContent">
        <br></br>
        <br></br>
        <h3>Quiz details</h3>

        <form onSubmit={(e) => this.onSubmit(e, examId)}>
          <div className="mb-3">
            <label htmlFor="Type" class="form-label">
              Question 1
            </label>
            <input
              type="text"
              class="form-control"
              id="Type"
              name="question1"
              value={this.state.question1}
              onChange={this.onChange}
              aria-describedby="emailHelp"
              disabled={this.state.disabled ? "disabled" : ""}
            />
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">
              Answer 1
            </label>
            <input
              type="text"
              class="form-control"
              id="answers1"
              name="answers1"
              value={this.state.answers1}
              onChange={this.onChange}
              disabled={this.state.disabled ? "disabled" : ""}
            />
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">
              Answer 2
            </label>
            <input
              type="text"
              class="form-control"
              id="answers2"
              name="answers2"
              value={this.state.answers2}
              onChange={this.onChange}
              disabled={this.state.disabled ? "disabled" : ""}
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              Answer 3
            </label>
            <input
              type="text"
              class="form-control"
              id="answers3"
              name="answers3"
              value={this.state.answers3}
              onChange={this.onChange}
              disabled={this.state.disabled ? "disabled" : ""}
            />
          </div>

          <div class="mb-3">
            <label for="number" class="form-label">
              Correct Answer
            </label>
            <input
              type="text"
              class="form-control"
              id="correctAnswer1"
              name="correctAnswer1"
              value={this.state.correctAnswer1}
              onChange={this.onChange}
              disabled={this.state.disabled ? "disabled" : ""}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Type" class="form-label">
              Question 2
            </label>
            <input
              type="text"
              class="form-control"
              id="Type"
              name="question2"
              value={this.state.question2}
              onChange={this.onChange}
              aria-describedby="emailHelp"
              disabled={this.state.disabled ? "disabled" : ""}
            />
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">
              Answer 1
            </label>
            <input
              type="text"
              class="form-control"
              id="answers4"
              name="answers4"
              value={this.state.answers4}
              onChange={this.onChange}
              disabled={this.state.disabled ? "disabled" : ""}
            />
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">
              Answer 2
            </label>
            <input
              type="text"
              class="form-control"
              id="answers5"
              name="answers5"
              value={this.state.answers5}
              onChange={this.onChange}
              disabled={this.state.disabled ? "disabled" : ""}
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              Answer 3
            </label>
            <input
              type="text"
              class="form-control"
              id="answers6"
              name="answers6"
              value={this.state.answers6}
              onChange={this.onChange}
              disabled={this.state.disabled ? "disabled" : ""}
            />
          </div>

          <div class="mb-3">
            <label for="number" class="form-label">
              Correct Answer
            </label>
            <input
              type="text"
              class="form-control"
              id="correctAnswer2"
              name="correctAnswer2"
              value={this.state.correctAnswer2}
              onChange={this.onChange}
              disabled={this.state.disabled ? "disabled" : ""}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Type" class="form-label">
              Question 3
            </label>
            <input
              type="text"
              class="form-control"
              id="Type"
              name="question3"
              value={this.state.question3}
              onChange={this.onChange}
              aria-describedby="emailHelp"
              disabled={this.state.disabled ? "disabled" : ""}
            />
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">
              Answer 1
            </label>
            <input
              type="text"
              class="form-control"
              id="answers7"
              name="answers7"
              value={this.state.answers7}
              onChange={this.onChange}
              disabled={this.state.disabled ? "disabled" : ""}
            />
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">
              Answer 2
            </label>
            <input
              type="text"
              class="form-control"
              id="answers8"
              name="answers8"
              value={this.state.answers8}
              onChange={this.onChange}
              disabled={this.state.disabled ? "disabled" : ""}
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              Answer 3
            </label>
            <input
              type="text"
              class="form-control"
              id="answers9"
              name="answers9"
              value={this.state.answers9}
              onChange={this.onChange}
              disabled={this.state.disabled ? "disabled" : ""}
            />
          </div>

          <div class="mb-3">
            <label for="number" class="form-label">
              Correct Answer
            </label>
            <input
              type="text"
              class="form-control"
              id="correctAnswer3"
              name="correctAnswer3"
              value={this.state.correctAnswer3}
              onChange={this.onChange}
              disabled={this.state.disabled ? "disabled" : ""}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ViewQuiz;
