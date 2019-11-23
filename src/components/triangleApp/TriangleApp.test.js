import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import { Simulate } from 'react-dom/test-utils';

import TriangleApp from './TriangleApp'

afterEach(cleanup);

test('error message shown on invalid input 1', () => {
	const { getAllByPlaceholderText, queryByText } = render( <TriangleApp /> );

	Simulate.change(getAllByPlaceholderText(/only positive integeres/i)[0], { target: { value: 'a', id: 0 } })
	expect(queryByText(/Invalid input/i)).toBeTruthy()
})

test('error message shown on invalid input 2', () => {
	const { getAllByPlaceholderText, queryByText } = render( <TriangleApp /> );

	Simulate.change(getAllByPlaceholderText(/only positive integeres/i)[1], { target: { value: '-1', id: 1 } })
	expect(queryByText(/Invalid input/i)).toBeTruthy()
})

test('error message shown on invalid input 3', () => {
	const { getAllByPlaceholderText, queryByText } = render( <TriangleApp /> );

	Simulate.change(getAllByPlaceholderText(/only positive integeres/i)[2], { target: { value: '+', id: 2 } })
	expect(queryByText(/Invalid input/i)).toBeTruthy()
})

