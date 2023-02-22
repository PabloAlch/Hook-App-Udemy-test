import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {
  
  const [formState, setFormState] = useState({
    username:'pablo',
    email: 'pablo@example.com'
  });

  const { username, email} = formState

  const onInputChange = ({ target})=>{
    const { name, value } = target;
    setFormState({
      ...formState,
      [ name ]: value
    })
  }


  useEffect(() => {
      // console.log('Useffect changed!')
  }, []);

  useEffect(() => {
      // console.log('FormState changed!')
  }, [formState]);

  useEffect(() => {
      // console.log('email changed!')
  }, [email]);

  useEffect(() => {
    
  
    return () => {
      
    }
  }, [])
  
  
  
  return (

    <>
    <h1>Formulario Simple</h1>
    <hr />

    <input 
      type="text"
      className='form-control'
      placeholder='Username'
      name='username'
      value={username} 
      onChange={ onInputChange}
      />

    <input 
      type="email"
      className='form-control mt-2'
      placeholder='Pablo@example.com'
      name='email'
      value={email}
      onChange={ onInputChange}
       />

      {
       (username === 'pablo') && <Message />
      }
    </>
  )
}
