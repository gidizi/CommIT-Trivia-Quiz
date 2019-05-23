
import questionsData from "./questionsData.js"
import QuestionItem from "./QuestionItem.js"
import Menu from "./Menu.js"

function shuffleArray(array) { //Durstenfeld shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {  //Move later user Choices to a seperate nested object
      currentQuestNum: 0,
      quizActive: true
    }
    this.shuffleQuestionsAndAnswers()
    this.handleChange = this.handleChange.bind(this)
    this.navigationClick = this.navigationClick.bind(this)
    this.shuffleQuestionsAndAnswers = this.shuffleQuestionsAndAnswers.bind(this)
  }

  shuffleQuestionsAndAnswers(){
    let questDataForShuffle = questionsData.map(a => Object.assign({}, a)); //deep copy of the data for modifications
    shuffleArray(questDataForShuffle) //shuffling the questions
    questDataForShuffle = questDataForShuffle.slice(0,9) //getting the first 9 random questions
    this.newQuesData = questDataForShuffle.map((question) => {
      let optionalAnswers = question.wrongAnss.concat(question.correctAns)
      shuffleArray(optionalAnswers) //shuffling the order of the answers
      return { id: question.id, questionText: question.questionText, correctAns: question.correctAns,
      optionalAnswers: optionalAnswers }
    })
  }

  handleChange(questionId, choice) {
    this.setState({ [questionId] : choice})
  }

  navigationClick(forward) {
    if ((this.state.currentQuestNum === this.questionsNumber) && forward === true) {
      this.setState({quizActive: false})
    } else {
      this.setState(prevState => {
        return { currentQuestNum: forward ? prevState.currentQuestNum+1 : prevState.currentQuestNum-1}
      })
    }
  }

  componentDidMount() {
    this.questionsNumber = Object.keys(this.newQuesData).length-1 
  }
  
  render() {
    return (
        this.state.quizActive ?
        <QuestionItem item={this.newQuesData[this.state.currentQuestNum]}
        handleChange={this.handleChange}
        navigationClick={this.navigationClick}
        state={this.state}
        questionsNumber={this.questionsNumber}/> :
        <Menu
        state={this.state}
        data={this.newQuesData} />
      )
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<App />, domContainer);