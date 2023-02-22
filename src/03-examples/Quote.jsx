import React, { useLayoutEffect, useRef, useState } from 'react'

export const Quote = ({name, image}) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width:0, height: 0 })

  useLayoutEffect(() => {
    const { height, width} = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width })
  
   
  }, [])

  return (
    <>
        <img src={image} alt={name} />
        <p>{name}</p>
    <blockquote className="blockquote text-end" style={{ display: 'flex'}}>
        <p ref={ pRef } className="mb-1">{image}</p>
        <footer className="blockquote-footer">{name}</footer>
    </blockquote>

    <code>{ JSON.stringify(boxSize) }</code>

    </>
  )
}
