import React from 'react'
import { Link as Anchor } from 'react-router-dom'

export default function Homepage () {
  return (
    <div>
      <p className='text-center '>Already have an account? <Anchor className='text-primary font-bold' to='/login'>Login</Anchor></p>
      <p className='text-center'>Go back to <Anchor className='text-primary font-bold' to='/'>home page</Anchor></p>
    </div>
  )
}
