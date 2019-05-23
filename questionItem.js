var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
		React.createElement(
			"label",
			null,
			React.createElement("input", {
				type: "radio",
				name: props.item.id,
				value: ans0,
				checked: props.state[questId] === ans0,
				onChange: function onChange() {
					return props.handleChange(props.item.id, ans0);
				}
			}),
			" ",
			ans0
		),
		React.createElement("br", null),
		React.createElement(
			"label",
			null,
			React.createElement("input", {
				type: "radio",
				name: props.item.id,
				value: ans1,
				checked: props.state[questId] === ans1,
				onChange: function onChange() {
					return props.handleChange(props.item.id, ans1);
				}
			}),
			" ",
			ans1
		),
		React.createElement("br", null),
		React.createElement(
			"label",
			null,
			React.createElement("input", {
				type: "radio",
				name: props.item.id,
				value: ans2,
				checked: props.state[questId] === ans2,
				onChange: function onChange() {
					return props.handleChange(props.item.id, ans2);
				}
			}),
			" ",
			ans2
		),
		React.createElement("br", null),
		React.createElement(
			"label",
			null,
			React.createElement("input", {
				type: "radio",
				name: props.item.id,
				value: ans3,
				checked: props.state[questId] === ans3,
				onChange: function onChange() {
					return props.handleChange(props.item.id, ans3);
				}
			}),
			" ",
			ans3
		),
		React.createElement("br", null),
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