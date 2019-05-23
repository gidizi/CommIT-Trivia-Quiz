function Menu(props) {
	var correctCount = 0;
	props.data.map(function (questionItem) {
		var userAnsCorrect = questionItem.correctAns === props.state[questionItem.id];
		userAnsCorrect && correctCount++;
	});
	return React.createElement(
		"div",
		{ className: "finalGrade" },
		React.createElement(
			"h1",
			null,
			"Final Grade: ",
			Math.round(correctCount / props.data.length * 100)
		)
	);
}
export default Menu;