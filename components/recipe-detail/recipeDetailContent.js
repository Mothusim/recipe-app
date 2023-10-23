import ImageCarousel from '@/components/ui/carousel/carousel';
import Image from 'next/image';
import RecipeTitle from '@/components/ui/title/recipeTitle';
import CookTimeAndServings from '@/components/ui/cookTimeAndServings/cookTimeAndServing';
import BackBtn from '@/components/ui/buttons/backBtn';
import Description from '@/components/ui/description/description';
import classes from './recipeDetailContent.module.css'

/**
 * The function exports a React component that renders the details of a recipe, including the recipe
 * title, images, cook time, servings, and description.
 * @returns a JSX element.
 */

export default function RecipeDetailContent({ recipe }) {

  return (

    <div className={classes.container}>

      <div>

        <BackBtn link='/' />
        <RecipeTitle recipe={recipe} />

        <Image src={recipe.images[0]} alt={recipe.title} width={1440} height={1440} style={{width: '55em', height: '30em'}} />

        <ImageCarousel recipe={recipe}/>

        <CookTimeAndServings recipe={recipe} label='Total time'/>

      </div>

      <Description recipe={recipe} />

    </div>

  );

}