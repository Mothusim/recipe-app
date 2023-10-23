import React, { useState } from 'react';
import DescriptionTag from './descriptionTag';
import Input from '../inputs/input';

/**
 * The `Description` component is a form that allows users to edit and save the description of a
 * recipe.
 * @returns The component is returning a JSX element, which is a div containing a DescriptionTag
 * component, a paragraph element, and an Input component. The paragraph element displays the content
 * of the recipe's description, and the Input component allows the user to edit the description and
 * save the changes.
 */

const Description = ({ recipe }) => {

  const [content, setContent] = useState(recipe.description);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {

    setIsEditing(true);

  };

  const data = {

    newDescription: content, 

  };


  /**
   * The `handleSave` function sends a PUT request to update the description of a recipe using the
   * Fetch API in JavaScript.
   */

  const handleSave = () => {

    const url = `/api/recipes/${recipe._id}`;

    fetch(url, {

      method: 'PUT',
      headers: {

        'Content-Type': 'application/json',

      },

      body: JSON.stringify(data),

    })
    .then((response) => {

      if (!response.ok) {

        throw new Error('Failed to update description');

      }

      return response.json();

    })
    .then((responseData) => {

      console.log('Description updated successfully', responseData);

    })
    .catch((error) => {

      console.error('Error updating description', error);
      
    });

  };

  const handleChange = (event) => {

    setContent(event.target.value);

  };

  return (

    <div>
      
      <DescriptionTag handleEdit={handleEdit} />

      <div>

        <p style={{ display: isEditing ? 'none' : 'block' }}>{content}</p>
        
      </div>

      {isEditing && (

        <Input handleChange={handleChange} handleSave={handleSave} content={content}/>

      )}

    </div>

  );

};

export default Description;
