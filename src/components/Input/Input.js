import React from 'react';
import './Input.scss';

const Input = ({label, ...otherProps}) => {
	return (
		<div className={'inputArea'}>
			{label ?
				<label htmlFor={otherProps.id}>{label}</label> : <></>}
			<input {...otherProps}/>
		</div>
	);
};

export default Input;
