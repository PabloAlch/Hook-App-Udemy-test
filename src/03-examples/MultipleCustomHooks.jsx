import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {

  const {counter ,increment} = useCounter();
  const { data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`)

  const {id, name, status, species, image} = !!data && data // primero data es null, !data es true, !!data es false 
  // console.log(data)
  
  

  // console.log(counter)
  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      <p>{species}</p>
      
      {
        (isLoading)
          ? <LoadingQuote />
          :<Quote image={image} name={name}/>
      }

      <button 
        className="btn btn-primary"
        disabled={ isLoading } 
        onClick={() => increment(1)}> Next Quote</button>



    </>
  )
}
