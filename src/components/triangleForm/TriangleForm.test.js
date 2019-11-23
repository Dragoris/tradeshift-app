import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import { Simulate } from 'react-dom/test-utils';

import TriangleForm from './TriangleForm'

afterEach(cleanup);

const sides = [
	{name: 'First Side', value: 1, valid: true},
	{name: 'Second Side', value: 1, valid: true},
	{name: 'Third Side', value: 1, valid: true}
]

test('error message initally hidden', () => {
	const { queryByText } = render( <TriangleForm  handleSubmit={()=> ''} handleChange={()=> ''} sides={sides}/> );
	expect(queryByText(/Invalid input/i)).toBeFalsy()
})

test('handleSubmit is called when the form is submitted', () => {
	const mock = jest.fn(e => e.preventDefault())
	const { getByTestId } = render(  <TriangleForm  handleSubmit={mock} handleChange={()=> ''} sides={sides}/>  );

	fireEvent.click(getByTestId('button'))
	expect(mock).toHaveBeenCalled();
})

test('handleChange is called when an input is changed', () => {
	const mock = jest.fn()
	const { getAllByPlaceholderText } = render(  <TriangleForm  handleSubmit={()=> ''} handleChange={mock} sides={sides}/>  );

	const firstInput = getAllByPlaceholderText(/only positive integeres/i)[0]
	Simulate.change(firstInput, { target: { value: '1' } })
	expect(mock).toHaveBeenCalled();
})

