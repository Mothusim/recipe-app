import classes from './input.module.css'

/**
 * The function exports a React component called Input that renders an input field and a button, and
 * takes in three props: handleSave, handleChange, and content.
 * @returns a JSX element, which is a div containing an input element and a button element.
 */

export default function Input({handleSave, handleChange, content}) {

  return (

    <div>

        <input

            type="text"
            value={content}
            onChange={handleChange}
            className={classes.input}

        />

        <button onClick={handleSave}>Save</button>

    </div>

  )

}
