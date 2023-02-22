import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const LoginPage = () => {

  const { user, setUser} = useContext( UserContext )
  console.log( user)

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre aria-label='pre-login'>
        { JSON.stringify( user, null, 3 )}
      </pre>


      <button
        className='btn btn-primary'
        onClick={ () => setUser({ id: 123, name: 'Ariel Alcon', email: 'ariel@example.com' })}>
          Establecer usuario
      </button>
    </>
  )
}
