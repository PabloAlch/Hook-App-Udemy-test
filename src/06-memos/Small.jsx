import { memo } from 'react'

export const Small = memo( ({ value }) => {

  console.log('Se regenero otra vez')

  
  return (
    <small>{ value }</small>
  )
} )
