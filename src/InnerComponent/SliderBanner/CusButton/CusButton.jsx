import React from 'react'
import './CusButton.css'
import { Link } from 'react-router-dom'

const CusButton = (props) => {
  return (
    <Link href={props.link} className='CusButton'>
      <button>{props.name}</button>
    </Link>
  )
}

export default CusButton