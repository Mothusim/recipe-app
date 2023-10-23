import React from 'react'
import { FaEdit } from 'react-icons/fa';
import classes from './descriptionTag.module.css'

/**
 * The `DescriptionTag` function is a React component that renders a heading with a button for editing.
 * @returns a JSX element. Specifically, it is returning an `<h5>` element with a className of
 * `descriptionTag`. Inside the `<h5>` element, there is a `<span>` element with a className of `span`
 * and the text "What is it?". There is also a `<button>` element with an `onClick` event handler that
 * calls the `handleEdit`
 */

function DescriptionTag({handleEdit}) {

    return (

    <h5 className={classes.descriptionTag}>

        <span className={classes.span}>What is it?</span>

        <button onClick={handleEdit}>
            <FaEdit />
        </button>
        
        </h5>

    )

}

export default DescriptionTag