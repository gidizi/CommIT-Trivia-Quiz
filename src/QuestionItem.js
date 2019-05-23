function QuestionItem(props) {
	const questId = props.item.id
	const [ans0, ans1, ans2, ans3] = props.item.optionalAnswers
	return (
			<div className="app">
				<h3>{props.item.questionText}?</h3>
				<label>
					<input
						type="radio"
						name={props.item.id}
						value={ans0}
						checked={props.state[questId] === ans0}
						onChange={() => props.handleChange(props.item.id, ans0)}
					/> {ans0}
				</label>
				<br/>
				<label>
					<input
						type="radio"
						name={props.item.id}
						value={ans1}
						checked={props.state[questId] === ans1}
						onChange={() => props.handleChange(props.item.id, ans1)}
					/> {ans1}
				</label>
				<br/>
				<label>
					<input
						type="radio"
						name={props.item.id}
						value={ans2}
						checked={props.state[questId] === ans2}
						onChange={() => props.handleChange(props.item.id, ans2)}
					/> {ans2}
				</label>
				<br/>
				<label>
					<input
						type="radio"
						name={props.item.id}
						value={ans3}
						checked={props.state[questId] === ans3}
						onChange={() => props.handleChange(props.item.id, ans3)}
					/> {ans3}
				</label>
				<br/>
				<div className="btnDiv">
					<button type="button" className="btn" disabled={props.state.currentQuestNum === 0} onClick={() => props.navigationClick(false)}>Prev</button>
					<button type="button" className="btn" onClick={() => props.navigationClick(true)}>{props.state.currentQuestNum !== props.questionsNumber ? "Next" : "Done"}</button>
				</div>
			</div>
		)
}

export default QuestionItem