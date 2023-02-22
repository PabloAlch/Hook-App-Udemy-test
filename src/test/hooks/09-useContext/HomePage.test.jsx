import { render, screen } from "@testing-library/react"
import { UserContext } from "../../../09-useContext/context/UserContext"
import { HomePage } from "../../../09-useContext/HomePage"


describe('Pruebas en el comonente <HomePage />', () => { 

  const user = {
    id: 1,
    name: 'Pablock'
  }
  
  test('should debe de mostrar el compnente sin el usuario', () => { 
    
      render(
        <UserContext.Provider value= {{ user: null}}>
          <HomePage />
        </UserContext.Provider>
        ) 

        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe('null')
   })

   test('should debe de mostrar el componente con el usuario', () => { 
    render(
      <UserContext.Provider value= {{ user: user.name}}>
        <HomePage />
      </UserContext.Provider>
      ) 

      const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toContain(user.name)

      screen.debug()

    })
 })