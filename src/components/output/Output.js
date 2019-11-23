import React from 'react';

function Output(props) {
  return (
    <div data-ts="Board">
		<div data-ts="Panel">
			<h2>Your Result:</h2>
			<p>{props.text}</p>
		</div>
	</div>
  );
}

export default Output;
