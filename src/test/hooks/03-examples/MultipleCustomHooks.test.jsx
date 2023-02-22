import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../../03-examples"
import { useCounter } from "../../../hooks/useCounter"
import { useFetch } from "../../../hooks/useFetch"

//PENDIENTEE 

jest.mock('../../../hooks/useFetch')
jest.mock('../../../hooks/useCounter')

describe('Pruebas en <MultipleCustomHooks />', () => {

  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  })

  
  beforeEach( ()=> {      //con esto se limpia las pruebas cuanto se llama a la funcion
    jest.clearAllMocks();
  })

  test('should debe de mostrar el compnente por defecto', () => { 

    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null
    });
    
    render( <MultipleCustomHooks /> )
    
    expect( screen.getByText('Loading...'))
    expect( screen.getByText('Breaking Bad Quotes'))

    const nextButton = screen.getByRole('button', {name: 'Next Quote'})

    expect(nextButton.disabled).toBeTruthy()
    // screen.debug()
   })

   //PENDIENTEEEE min 6 leccion 170
   test('should debe de mostrar un Quote', () => { 
    
    useFetch.mockReturnValue({
      data: { name: 'Pablo', image: 'http://imagen.com' },
      isLoading: false,
      hasError: null
    });

     render( <MultipleCustomHooks /> )
     expect( screen.getByText('http://imagen.com') ).toBeTruthy();
     expect( screen.getAllByText('Pablo') ).toBeTruthy();

    const nextButton = screen.getByRole('button', {name: 'Next Quote'});
    expect(nextButton.disabled).toBeFalsy
    })

    test('should debe de llamar la funcion de incrementar', () => { 

     
      
      useFetch.mockReturnValue({
        data: { name: 'Pablo', image: 'http://imagen.com' },
        isLoading: false,
        hasError: null
      });


      render( <MultipleCustomHooks /> )
    const nextButton = screen.getByRole('button', {name: 'Next Quote'});
    fireEvent.click( nextButton );
    
    expect( mockIncrement ).toHaveBeenCalled();

     })
 })