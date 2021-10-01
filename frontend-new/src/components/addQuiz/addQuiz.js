import React from "react";
import axios from "axios";

class AddQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
    // this.onChangeProposalID = this.onChangeProposalID.bind(this);
    this.state = {
      exam: [],
      quizId: "",
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

      title: "",
      courseId: "",
      courseName: "",
      categoryId: "",
      examDate: "",
      startTime: "",
      endTime: "",
      instructions: "",
      type: "",

      isEditQuiz: false,
      errors: {},
    };
  }

  componentWillMount() {
    const { examId } = this.props;
    const { title } = this.props;
    const { courseId } = this.props;
    const { courseName } = this.props;
    const { examDate } = this.props;
    const { startTime } = this.props;
    const { quizId } = this.props;
    const { isEditQuiz } = this.props;

    if (
      this.state.examId != examId &&
      this.state.title != title &&
      this.state.courseId != courseId
    ) {
      this.setState({
        examId: examId,
        title: title,
        courseId: courseId,
        courseName: courseName,
        examDate: examDate,
        startTime: startTime,
        isEditQuiz: isEditQuiz,
        // quizID: quizID,
      });
    }

    // if (this.state.quizId) {
    //   this.setState({
    //     // quizId: "61279e68495de239a7eccaca",
    //     quizId: "",
    //   });
    // }

    if (quizId && quizId != this.state.quizId) {
      this.setState({
        quizId: quizId,
      });
      axios.get("http://localhost:8080/quiz/" + quizId).then((res) => {
        this.setState({
          questions: res.data.questions,
          question1: res.data.questions[0].question,
          answers1: res.data.questions[0].answers[0],
          answers2: res.data.questions[0].answers[1],
          answers3: res.data.questions[0].answers[2],
          correctAnswer1: res.data.questions[0].correctAnswer,
          question2: res.data.questions[1].question,
          answers4: res.data.questions[1].answers[0],
          answers5: res.data.questions[1].answers[1],
          answers6: res.data.questions[1].answers[2],
          correctAnswer2: res.data.questions[1].correctAnswer,
          question3: res.data.questions[2].question,
          answers7: res.data.questions[2].answers[0],
          answers8: res.data.questions[2].answers[1],
          answers9: res.data.questions[2].answers[2],
          correctAnswer3: res.data.questions[2].correctAnswer,
        });
      });
    }

    let examOne = {
      title: this.state.title,
      isEditQuiz: this.state.isEditQuiz,
    };
  }

  componentDidUpdate() {
    const { examId } = this.props;
    const { title } = this.props;
    const { courseId } = this.props;
    const { courseName } = this.props;
    const { examDate } = this.props;
    const { startTime } = this.props;
    const { quizId } = this.props;
    const { isEditQuiz } = this.props;

    if (
      this.state.examId != examId &&
      this.state.title != title &&
      this.state.courseId != courseId
    ) {
      this.setState({
        examId: examId,
        title: title,
        courseId: courseId,
        courseName: courseName,
        examDate: examDate,
        startTime: startTime,
        isEditQuiz: isEditQuiz,
        // quizID: quizID,
      });
    }

    // if (this.state.quizId) {
    //   this.setState({
    //     // quizId: "61279e68495de239a7eccaca",
    //     quizId: "",
    //   });
    // }

    if (quizId && quizId != this.state.quizId) {
      this.setState({
        quizId: quizId,
      });
      axios.get("http://localhost:8080/quiz/" + quizId).then((res) => {
        this.setState({
          questions: res.data.questions,
          question1: res.data.questions[0].question,
          answers1: res.data.questions[0].answers[0],
          answers2: res.data.questions[0].answers[1],
          answers3: res.data.questions[0].answers[2],
          correctAnswer1: res.data.questions[0].correctAnswer,
          question2: res.data.questions[1].question,
          answers4: res.data.questions[1].answers[0],
          answers5: res.data.questions[1].answers[1],
          answers6: res.data.questions[1].answers[2],
          correctAnswer2: res.data.questions[1].correctAnswer,
          question3: res.data.questions[2].question,
          answers7: res.data.questions[2].answers[0],
          answers8: res.data.questions[2].answers[1],
          answers9: res.data.questions[2].answers[2],
          correctAnswer3: res.data.questions[2].correctAnswer,
        });
      });
    }

    // this.componentDidMount();
    // axios.get("http://localhost:8080/exams/" + examId).then((res) => {
    //   this.setState({
    //     title: res.data.title,
    //     courseId: res.data.courseId,
    //     courseName: res.data.courseName,
    //     // categoryId: res.data.categoryId,
    //     examDate: res.data.examDate,
    //     // startTime: res.data.startTime,
    //     // endTime: res.data.endTime,
    //     // instructions: res.data.instructions,
    //     // type: res.data.type,
    //   });
    //   console.log("res", res);
    // });

    let examOne = {
      title: this.state.title,
      isEditQuiz: this.state.isEditQuiz,
    };
  }

  // componentDidUpdate() {
  //   console.log("component did update");
  // }

  // componentDidUpdate() {
  //   const { examId } = this.props;
  //   const { title } = this.props;
  //   const { courseId } = this.props;
  //   const { courseName } = this.props;
  //   const { examDate } = this.props;
  //   const { quizId } = this.props;
  //   const { isEditQuiz } = this.props;
  //   this.setState({
  //     examId: examId,
  //     title: title,
  //     courseId: courseId,
  //     courseName: courseName,
  //     examDate: examDate,
  //     isEditQuiz: isEditQuiz,
  //     // quizID: quizID,
  //   });

  //   // if (this.state.quizId) {
  //   //   this.setState({
  //   //     // quizId: "61279e68495de239a7eccaca",
  //   //     quizId: "",
  //   //   });
  //   // }

  //   if (quizId) {
  //     this.setState({
  //       quizId: quizId,
  //     });
  //     axios.get("http://localhost:8080/quiz/" + quizId).then((res) => {
  //       this.setState({
  //         questions: res.data.questions,
  //         question1: res.data.questions[0].question,
  //         answers1: res.data.questions[0].answers[0],
  //         answers2: res.data.questions[0].answers[1],
  //         answers3: res.data.questions[0].answers[2],
  //         correctAnswer1: res.data.questions[0].correctAnswer,
  //         question2: res.data.questions[1].question,
  //         answers4: res.data.questions[1].answers[0],
  //         answers5: res.data.questions[1].answers[1],
  //         answers6: res.data.questions[1].answers[2],
  //         correctAnswer2: res.data.questions[1].correctAnswer,
  //         question3: res.data.questions[2].question,
  //         answers7: res.data.questions[2].answers[0],
  //         answers8: res.data.questions[2].answers[1],
  //         answers9: res.data.questions[2].answers[2],
  //         correctAnswer3: res.data.questions[2].correctAnswer,
  //       });
  //     });
  //   }
  // }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onClick(e) {
    e.preventDefault();
    let examNew = {
      id: this.state.examId,
      title: this.state.title,
      courseId: this.state.courseId,
      quizId: this.state.quizId,
      courseName: this.state.courseName,
      examDate: this.state.examDate,

      categoryId: null,
      startTime: this.state.startTime,
      endTime: null,
      instructions: null,
      type: null,
    };

    axios
      .put("http://localhost:8080/exams/", examNew)
      .then((response) => {
        // this.setState({ examId: response.data.id });
        alert("Data successfully inserted");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  }

  //   onChangeProposalID(e) {
  //     this.setState({
  //       workshopProposalId: e.target.workshopProposalId,
  //     });
  //   }

  formValidation = () => {
    const { question1, answers1, answers2, answers3, correctAnswer1 } =
      this.state;
    let isValid = true;
    const errors = {};
    if (question1.trim().length < 1) {
      errors.q1Length = "First question can't be empty!";
      isValid = false;
    }

    if (
      answers1.trim().length < 1 ||
      answers2.trim().length < 1 ||
      answers3.trim().length < 1
    ) {
      errors.a1Length = "Please add answers to the first question!";
      isValid = false;
    }

    if (correctAnswer1.trim().length < 1) {
      errors.cAnswLength = "Please add the correct answer!";
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };

  onSubmit(e, oldexamId) {
    e.preventDefault();

    const { isEditQuiz } = this.props;
    const { examId } = this.props;

    const isValid = this.formValidation();

    if (isValid) {
      if (isEditQuiz && isEditQuiz == true) {
        let quizUpdated = {
          id: this.state.quizId,
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
          .put("http://localhost:8080/quiz/", quizUpdated)
          .then((response) => {
            // this.setState({ examId: response.data.id });
            alert("Data successfully inserted");
          })
          .catch((error) => {
            console.log(error.message);
            alert(error.message);
          });
      } else {
        let quizNew = {
          examId: oldexamId,
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
            this.setState({ quizId: response.data.id });
            console.log(response.data.id);
            alert("Data successfully inserted");
          })
          .catch((error) => {
            console.log(error.message);
            alert(error.message);
          });
      }
    }
  }

  render() {
    const { examId } = this.props;
    const { isEditQuiz } = this.props;
    const { errors } = this.state;
    return (
      <div className="quizContent">
        <br></br>
        <br></br>
        {isEditQuiz == true ? <h3>Edit Quiz</h3> : <h3>Add New Quiz</h3>}

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
          {!isEditQuiz ? (
            <button
              type="button"
              class="btn btn-primary"
              onClick={this.onClick}
              // disabled={this.state.isEditQuiz}
            >
              Confirm
            </button>
          ) : (
            ""
          )}
          {Object.keys(errors).map((key) => {
            return (
              <div style={{ color: "red" }} key={key}>
                {errors[key]}
              </div>
            );
          })}
        </form>
      </div>
    );
  }
}

export default AddQuiz;
