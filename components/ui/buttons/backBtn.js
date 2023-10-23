import Link from 'next/link'
import React from 'react'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import classes from './backBtn.module.css'

/**
 * The function `BackBtn` is a React component that renders a back button with an arrow icon and a text
 * link.
 * @returns a JSX element.
 */

export default function BackBtn({link}) {

  return (

    <Link href={link} className={classes.backBtn} style={{marginBottom: '1em'}}>
    
        <FaArrowAltCircleLeft className={classes.backBtnIcon}/>

        <h4 style={{ marginLeft: '10px' }}><b>Go back to all recipes</b></h4>

    </Link>

  )

}
