import React, { useState } from 'react'
import Signup from './Signup'
import Login from './Login'

export default function Homepage() {

  const[active ,Setactive]=useState(false);

  function handleactivetstate() {
    Setactive(true)
  }

  return (
    <div>Homepage</div>
  )
}
