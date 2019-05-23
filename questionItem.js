var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import OptAnswer from "./OptAnswer.js";

function QuestionItem(props) {
	var questId = props.item.id;

	var _props$item$optionalA = _slicedToArray(props.item.optionalAnswers, 4),
	    ans0 = _props$item$optionalA[0],
	    ans1 = _props$item$optionalA[1],
	    ans2 = _props$item$optionalA[2],
	    ans3 = _props$item$optionalA[3];

	return React.createElement(
		"div",
		{ className: "app" },
		React.createElement(
			"h3",
			null,
			props.item.questionText,
			"?"
		),
		React.createElement(OptAnswer, { itemId: questId, ansTxt: ans0, isChecked: props.state[questId] === ans0,
			handleChange: props.handleChange }),
		React.createElement(OptAnswer, { itemId: questId, ansTxt: ans1, isChecked: props.state[questId] === ans1,
			handleChange: props.handleChange }),
		React.createElement(OptAnswer, { itemId: questId, ansTxt: ans2, isChecked: props.state[questId] === ans2,
			handleChange: props.handleChange }),
		React.createElement(OptAnswer, { itemId: questId, ansTxt: ans3, isChecked: props.state[questId] === ans3,
			handleChange: props.handleChange }),
		React.createElement(
			"div",
			{ className: "btnDiv" },
			React.createElement(
				"button",
				{ type: "button", className: "btn", disabled: props.state.currentQuestNum === 0, onClick: function onClick() {
						return props.navigationClick(false);
					} },
				"Prev"
			),
			React.createElement(
				"button",
				{ type: "button", className: "btn", onClick: function onClick() {
						return props.navigationClick(true);
					} },
				props.state.currentQuestNum !== props.questionsNumber ? "Next" : "Done"
			)
		)
	);
}

export default QuestionItem;