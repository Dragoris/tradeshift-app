import { triangleCheck } from '../triangleCheck/triangleCheck'

test('Should be Equilateral', () => {
	expect(triangleCheck(1,1,1)).toBe('Equilateral Triangle - All sides are equal')
	expect(triangleCheck(6,6,6)).toBe('Equilateral Triangle - All sides are equal')
})
test('Should be Isosceles', () => {
	expect(triangleCheck(1,3,3)).toBe('Isosceles Triangle - Two sides are equal')
	expect(triangleCheck(6,7,6)).toBe('Isosceles Triangle - Two sides are equal')
})
test('Should be Scalene', () => {
	expect(triangleCheck(1,2,3)).toBe('Scalene Triangle - all sides are diffrent')
	expect(triangleCheck(16,26,19)).toBe('Scalene Triangle - all sides are diffrent')
})
test('Should be Invalid', () => {
	expect(triangleCheck(10,1,1)).toBe('This triangle violates The Triangle Inequality Theorem! Please ensure that the sum of the lengths of any 2 sides of a triangle must be greater than the third side.')
	expect(triangleCheck(2,6,3)).toBe('This triangle violates The Triangle Inequality Theorem! Please ensure that the sum of the lengths of any 2 sides of a triangle must be greater than the third side.')
})