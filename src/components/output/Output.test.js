import React from 'react';
import {cleanup, render} from '@testing-library/react';
import Output from './Output'

afterEach(cleanup);

test('output for Equilateral', () => {
  const { queryByText } = render( <Output text="Equilateral Triangle - All sides are equal" /> );
  expect(queryByText(/Equilateral Triangle - All sides are equal/i)).toBeTruthy()
})
test('output for Isosceles', () => {
  const { queryByText } = render( <Output text="Isosceles Triangle - Two sides are equal" /> );
  expect(queryByText(/Isosceles Triangle - Two sides are equal/i)).toBeTruthy()
})
test('output for Scalene', () => {
  const { queryByText } = render( <Output text="Scalene Triangle - all sides are diffrent" /> );
  expect(queryByText(/Scalene Triangle - all sides are diffrent/i)).toBeTruthy()
})
test('output for Invalid', () => {
  const { queryByText } = render( <Output text="This triangle violates The Triangle Inequality Theorem! Please ensure that the sum of the lengths of any 2 sides of a triangle must be greater than the third side." /> );
  expect(queryByText(/This triangle violates The Triangle Inequality Theorem! Please ensure that the sum of the lengths of any 2 sides of a triangle must be greater than the third side./i)).toBeTruthy()
})