var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import questionsData from "./questionsData.js";
import QuestionItem from "./QuestionItem.js";
import Menu from "./Menu.js";

function shuffleArray(array) {
  //Durstenfeld shuffle algorithm
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [array[j], array[i]];
    array[i] = _ref[0];
    array[j] = _ref[1];
  }
}

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = { //Move later user Choices to a seperate nested object
      currentQuestNum: 0,
      quizActive: true
    };
    _this.shuffleQuestionsAndAnswers();
    _this.handleChange = _this.handleChange.bind(_this);
    _this.navigationClick = _this.navigationClick.bind(_this);
    _this.shuffleQuestionsAndAnswers = _this.shuffleQuestionsAndAnswers.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "shuffleQuestionsAndAnswers",
    value: function shuffleQuestionsAndAnswers() {
      var questDataForShuffle = questionsData.map(function (a) {
        return Object.assign({}, a);
      }); //deep copy of the data for modifications
      shuffleArray(questDataForShuffle); //shuffling the questions
      questDataForShuffle = questDataForShuffle.slice(0, 9); //getting the first 9 random questions
      this.newQuesData = questDataForShuffle.map(function (question) {
        var optionalAnswers = question.wrongAnss.concat(question.correctAns);
        shuffleArray(optionalAnswers); //shuffling the order of the answers
        return { id: question.id, questionText: question.questionText, correctAns: question.correctAns,
          optionalAnswers: optionalAnswers };
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(questionId, choice) {
      this.setState(_defineProperty({}, questionId, choice));
    }
  }, {
    key: "navigationClick",
    value: function navigationClick(forward) {
      if (this.state.currentQuestNum === this.questionsNumber && forward === true) {
        this.setState({ quizActive: false });
      } else {
        this.setState(function (prevState) {
          return { currentQuestNum: forward ? prevState.currentQuestNum + 1 : prevState.currentQuestNum - 1 };
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.questionsNumber = Object.keys(this.newQuesData).length - 1;
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.quizActive ? React.createElement(QuestionItem, { item: this.newQuesData[this.state.currentQuestNum],
        handleChange: this.handleChange,
        navigationClick: this.navigationClick,
        state: this.state,
        questionsNumber: this.questionsNumber }) : React.createElement(Menu, {
        state: this.state,
        data: this.newQuesData });
    }
  }]);

  return App;
}(React.Component);

var domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(App, null), domContainer);