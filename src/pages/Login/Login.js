import React from 'react';
import './Login.scss'
import Input from '../../components/Input/Input';

const Login = () => {
	return (
		<div className={'Login'}>
			<div className='login-area'>
				<div className='logo'><img src='' alt=''/></div>
				<form>
					<Input label={'Email'} id={'email'} />
				</form>
			</div>
		</div>
	);
};

export default Login;
