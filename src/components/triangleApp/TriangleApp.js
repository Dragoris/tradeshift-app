import React, { Component } from 'react';
import Output from '../output/Output'
import TriangleForm from '../triangleForm/TriangleForm'
import { triangleCheck } from '../../triangleCheck/triangleCheck'

class InputForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			sides: [
				{name: 'First Side', value: 1, valid: true},
				{name: 'Second Side', value: 1, valid: true},
				{name: 'Third Side', value: 1, valid: true}
			],
			output: '',
		}

	}

	handleChange = event => {
		const index = event.target.id;
     	const value = parseFloat(event.target.value);
     	//only accept numbers greater than 0
	    const isValid =  !Number.isNaN(value) && value > 0;

	    const newSides = [...this.state.sides];
	    newSides[index].value = isValid ? value : '';
	    newSides[index].valid = isValid;

	    this.setState({ sides: newSides });

	}

	handleSubmit = event => {
		const sides = this.state.sides
		//return all valid sides
		const isValid = sides.filter(side => {
			return side.valid
		})

		if (isValid.length === sides.length) {
			//pass in all side values
			const lengths = sides.map(side => side.value)
			const output = triangleCheck(...lengths)

			this.setState({
				...this.state,
				output
			})
		}
		else {
			this.setState({
				...this.state,
				output: 'All inputs must be positive intigers before submitting'
			})
		}
	}

	render(){
		return (
			<React.Fragment>
				<div data-ts="Board">
					<div data-ts="Panel">
						<div style={{paddingLeft: '10px'}}>
							<h2>Triangle Form</h2>
							<p>Please enter the length of each side of a triangle to find out what type of triangle they make.</p>
							<p>Rules: <br/>
								1.) All sides must be positive intigers. <br />
								2.) The sum of the lengths of any 2 sides of a triangle must be greater than the third side.

							</p>
						</div>
						<TriangleForm 
							sides={this.state.sides}
							handleSubmit={this.handleSubmit}
							handleChange={this.handleChange}
						/>
					</div>
				</div>
				<Output text={this.state.output} />
			</React.Fragment>
		);
	}
}

export default InputForm;
