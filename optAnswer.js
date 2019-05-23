function OptAnswer(props) {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"label",
			null,
			React.createElement("input", {
				type: "radio",
				name: props.itemId,
				value: props.ansTxt,
				checked: props.isChecked,
				onChange: function onChange() {
					return props.handleChange(props.itemId, props.ansTxt);
				}
			}),
			" ",
			props.ansTxt
		),
		React.createElement("br", null)
	);
}
export default OptAnswer;