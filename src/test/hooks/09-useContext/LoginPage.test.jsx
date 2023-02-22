import { fireEvent, render, screen } from "@testing-library/react"
import { UserContext } from "../../../09-useContext/context/UserContext"
import { LoginPage } from "../../../09-useContext/LoginPage"


describe('Pruebas en <LoginPage />', () => { 

    
  test('should debe de msotrar el componente sin el usuario', () => { 
    
    render( 
      <UserContext.Provider value= {{ user: null}}>
      <LoginPage />
      </UserContext.Provider>
    )
    // screen.debug()
    const preTag = screen.getByLabelText('pre-login')
      expect(preTag.innerHTML).toBe('null')
   })

   test('should debe de llamar el setUser cuando se hace click en el boton', () => { 
    
    const setUserMock = jest.fn()

    render( 
      <UserContext.Provider value= {{ user: null, setUser: setUserMock}}>
      <LoginPage />
      </UserContext.Provider>
    )

    const loginButton = screen.getByRole('button');
    fireEvent.click( loginButton );

    expect( setUserMock ).toHaveBeenCalled()
    expect( setUserMock ).toHaveBeenCalledWith({ id: 123, name: 'Ariel Alcon', email: 'ariel@example.com' })


    })
 })