import React from 'react';

function TriangleForm(props) {

  return (
    <form data-ts="Form">
		{props.sides.map((side, index) => {
		return (
			<fieldset key={index} >
				<label className={side.valid ? '' : "ts-error"}>
					<span>{side.name}</span>
					<input
						type="number"
						required
						onChange={(e)=> props.handleChange(e)}
						value={side.value}
						valid={side.valid ? 'true' : 'false'}
						id={index}
						placeholder="only positive integeres"
					/>
				</label>
				{!side.valid && (
					<dl className="ts-errors">
						<dt>Invalid input</dt>
						<dd>You must enter a number greater than 0</dd>
					</dl>
				)}
				
			</fieldset>
		)
		})}
		<button
			style={{marginLeft: '10px'}}
			data-ts="Button"
			className="ts-primary"
			onClick={(e)=> props.handleSubmit(e)}
			data-testid="button"
		>
			<span>Submit</span>
		</button>		
	</form>
  );
}

export default TriangleForm;
