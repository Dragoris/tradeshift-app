export const triangleCheck = (first, second, third) => {
	//the sum of the lengths of any 2 sides of a triangle must be greater than the third side
	if (
		first + second < third ||
		first + third < second ||
		second + third < first 

	) {
		return 'This triangle violates The Triangle Inequality Theorem! Please ensure that the sum of the lengths of any 2 sides of a triangle must be greater than the third side.'
	}

	if (first === second && first === third) {
		return 'Equilateral Triangle - All sides are equal'
	}

	if (
		first === second ||
	    first === third ||
	    second === third
	) {
		return 'Isosceles Triangle - Two sides are equal'
	}
	return 'Scalene Triangle - all sides are diffrent'
}