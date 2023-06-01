import React from 'react'
import { Link as Anchor } from 'react-router-dom'

export default function Homepagesesion () {
  return (
    <div>
      <p className='text-center '>you don't hace an account yes? <Anchor className='text-primary font-bold' to='/register'>Sign up</Anchor></p>
      <p className='text-center'>Go back to <Anchor className='text-primary font-bold' to='/'>home page</Anchor></p>
    </div>
  )
}
