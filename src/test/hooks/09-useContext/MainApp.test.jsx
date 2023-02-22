import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { MainApp } from "../../../09-useContext/MainApp"


describe('Pruebas en <MainApp />', () => { 
  
  test('should debe de mostrar el HomePage', () => { 
    
    render( 
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    )

    // screen.debug()
    expect( screen.getAllByText('LoginPage')).toBeTruthy();
   })
  
  
   test('should debe de mostrar el HomePage', () => { 
    
    render( 
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    )

    expect( screen.getAllByText('LoginPage')).toBeTruthy();
    screen.debug()
   })
   
   
   test('should debe de mostrar el AboutePage', () => { 
    
    render( 
      <MemoryRouter initialEntries={['/about']}>
        <MainApp />
      </MemoryRouter>
    )

    expect( screen.getAllByText('AboutPage')).toBeTruthy();
    screen.debug()
   })
 })