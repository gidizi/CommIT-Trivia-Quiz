function OptAnswer(props) {
	return(
			<div>
				<label>
					<input
						type="radio"
						name={props.itemId}
						value={props.ansTxt}
						checked={props.isChecked}
						onChange={() => props.handleChange(props.itemId, props.ansTxt)}
					/> {props.ansTxt}
				</label>
				<br/>				
			</div>
		)
}
export default OptAnswer
