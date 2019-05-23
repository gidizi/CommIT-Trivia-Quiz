function Menu(props) {
	let correctCount = 0
	props.data.map(questionItem => { 
		let userAnsCorrect = (questionItem.correctAns === props.state[questionItem.id])
		userAnsCorrect && correctCount++
	})
	return(
			<div className="finalGrade">
				<h1>Final Grade: {Math.round((correctCount/props.data.length)*100)}</h1>				
			</div>
		)
}
export default Menu
