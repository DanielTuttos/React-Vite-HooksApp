import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';
// import { Message } from './Message';

export const FormWithCustomHook = () => {

    const { formState, onInputChange, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password } = formState;

    return (
        <>
            <h1>form With Custom Hook</h1>

            <hr />

            <input
                type="email"
                className='form-control'
                placeholder='Username'
                name='username'
                value={username}
                onChange={onInputChange}
            />

            <input
                type="text"
                className='form-control mt-2'
                placeholder='test@test.com'
                name='email'
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className='form-control mt-2'
                placeholder='Password'
                name='password'
                value={password}
                onChange={onInputChange}
            />

            {/* {
                (username === 'daniel2') &&
                <Message />
            } */}
        </>
    )
}
