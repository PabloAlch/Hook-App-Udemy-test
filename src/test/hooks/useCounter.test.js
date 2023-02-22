import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils";
import { useCounter } from "../../hooks/useCounter"


describe('Pruebas en el useConter', () => { 
  
  test('should debe de retornar los valores por defecto', () => { 
    
    const { result } = renderHook( ()=> useCounter() ); //la Funcion renderHook viene de Jest-testing
    const { counter, increment, decrement, reset } = result.current;

    expect( counter ).toBe(10)
    expect( increment ).toEqual(expect.any( Function ) );
    expect( decrement ).toEqual(expect.any( Function ) );
    expect( reset ).toEqual(expect.any( Function ) );
   })

   test('should debe de gennerar el counter con el valor de 100', () => { 
    
    const { result } = renderHook( ()=> useCounter(100) );
    const { counter } = result.current;

      expect( counter ).toBe(100)

    })

    test('should debe de incrementar el contador', () => { 
      
      const { result } = renderHook( ()=> useCounter() ); //la Funcion renderHook viene de Jest-testing
      const { counter, increment } = result.current;
      
      act( () => {
        increment(); // +1
        increment(2);// +2
      })

      expect( result.current.counter ).toBe(13)

     })
    
     test('should debe de decrementar el contador', () => { 
      
      const { result } = renderHook( ()=> useCounter() ); //la Funcion renderHook viene de Jest-testing
      const { counter, decrement } = result.current;
      
      act( () => {
        decrement(); // +1
        decrement(2);// +2
      })

      expect( result.current.counter ).toBe(7)

     })
     
     
     test('should debe de realizar el reset', () => { 
      
      const { result } = renderHook( ()=> useCounter() ); //la Funcion renderHook viene de Jest-testing
      const { counter, reset, increment} = result.current;
      
      act( () => {
        increment();// +1

        reset()
      })

      expect( result.current.counter ).toBe(10)

     })

 })