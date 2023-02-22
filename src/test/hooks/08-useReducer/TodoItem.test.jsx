import { fireEvent, render, screen } from "@testing-library/react"
import { TodoItem } from "../../../08-useReducer/components/TodoItem"


describe('Pruebas en <TodoItem />', () => { 
  
  const todo =  {
    id: 1,
    description: 'Piedra de prueba',
    done: false,
  }

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach( ()=> jest.clearAllMocks() )


  test('should debe de mostrar el TODO Pendiente de completar', () => { 
    
    render( <TodoItem 
              todo={ todo } 
              onToggleTodo={ onToggleTodoMock} 
              onDeleteTodoMock={ onDeleteTodoMock }
            />
    
    );

    const liElement = screen.getByRole('listitem');
    expect( liElement.className ).toBe('list-group-item d-flex justify-content-between')
    
    const spanElement = screen.getByLabelText('span');
    // expect( spanElement.className ).toBe('align-self-center ') // toBe es estricto a comparación de contain
    expect( spanElement.className ).toContain('align-self-center')
    expect( spanElement.className ).not.toContain('text-decoration-line-through')

   })


   test('should debe de mostrar el TODO completado', () => { 

    todo.done = true;
    
    render( <TodoItem 
              todo={ todo } 
              onToggleTodo={ onToggleTodoMock} 
              onDeleteTodo={ onDeleteTodoMock }
            />
    
    );

    
    const spanElement = screen.getByLabelText('span');
    expect( spanElement.className ).toContain('text-decoration-line-through')

   })

   test('span debe de llamar el ToggleTodo cuando se hace click', () => { 
    
    render( <TodoItem 
      todo={ todo } 
      onToggleTodo={ onToggleTodoMock} 
      onDeleteTodo={ onDeleteTodoMock }
      />
    );

    const spanElement = screen.getByLabelText('span');
    fireEvent.click( spanElement );

    // screen.debug()

    expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id)

    })


    test('should button debe de llamar el deleteTodo', () => {  

      render( <TodoItem 
        todo={ todo } 
        onToggleTodo={ onToggleTodoMock} 
        onDeleteTodo={ onDeleteTodoMock }
        />
      );
  
      const deleteButton = screen.getByRole('button');
      fireEvent.click( deleteButton  );
  
      // screen.debug()
  
      expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id)

    })

 })