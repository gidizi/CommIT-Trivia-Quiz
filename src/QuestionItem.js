import OptAnswer from "./OptAnswer.js"

function QuestionItem(props) {
	const questId = props.item.id
	const [ans0, ans1, ans2, ans3] = props.item.optionalAnswers
	return (
			<div className="app">
				<h3>{props.item.questionText}?</h3>
				<OptAnswer itemId={questId}  ansTxt={ans0} isChecked={props.state[questId] === ans0}
				handleChange={props.handleChange} />
				<OptAnswer itemId={questId}  ansTxt={ans1} isChecked={props.state[questId] === ans1}
				handleChange={props.handleChange} />
				<OptAnswer itemId={questId}  ansTxt={ans2} isChecked={props.state[questId] === ans2}
				handleChange={props.handleChange} />
				<OptAnswer itemId={questId}  ansTxt={ans3} isChecked={props.state[questId] === ans3}
				handleChange={props.handleChange} />
				<div className="btnDiv">
					<button type="button" className="btn" disabled={props.state.currentQuestNum === 0} onClick={() => props.navigationClick(false)}>Prev</button>
					<button type="button" className="btn" onClick={() => props.navigationClick(true)}>{props.state.currentQuestNum !== props.questionsNumber ? "Next" : "Done"}</button>
				</div>
			</div>
		)
}

export default QuestionItem