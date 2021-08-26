import React from "react";
import axios from "axios";

class AddQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
    // this.onChangeProposalID = this.onChangeProposalID.bind(this);
    this.state = {
      examId: "",
      question1: "",
      question2: "",
      question3: "",
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
    };
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  //   onChangeProposalID(e) {
  //     this.setState({
  //       workshopProposalId: e.target.workshopProposalId,
  //     });
  //   }

  onSubmit(e, examId) {
    e.preventDefault();
    let quizNew = {
      examId: examId,
      questions: [
        {
          questionNumber: 1,
          question: this.state.question1,
          answers: [
            this.state.answers1,
            this.state.answers2,
            this.state.answers3,
          ],
          correctAnswer: this.state.correctAnswer1,
        },
        {
          questionNumber: 2,
          question: this.state.question2,
          answers: [
            this.state.answers4,
            this.state.answers5,
            this.state.answers6,
          ],
          correctAnswer: this.state.correctAnswer2,
        },
        {
          questionNumber: 3,
          question: this.state.question3,
          answers: [
            this.state.answers7,
            this.state.answers8,
            this.state.answers9,
          ],
          correctAnswer: this.state.correctAnswer3,
        },
      ],
    };

    axios
      .post("http://localhost:8080/quiz/", quizNew)
      .then((response) => {
        alert("Data successfully inserted");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  }

  render() {
    const { examId } = this.props;
    return (
      <div className="quizContent">
        <br></br>
        <br></br>
        <h3>Add New Quiz</h3>

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
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddQuiz;
