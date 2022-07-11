import React, { useState } from 'react'
import { useEffect } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'daniel',
        email: 'daniel@test.com'
    })

    const { username, email } = formState;

    const onInputChange = (e) => {
        const { value, name } = e.target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        // console.log("use effect called");
    }, [])

    useEffect(() => {
        // console.log("FormState change");
    }, [formState])

    useEffect(() => {
        // console.log("email change");
    }, [email])


    return (
        <>
            <h1>Simple form</h1>

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

            {
                (username === 'daniel2') &&
                <Message />
            }
        </>
    )
}
