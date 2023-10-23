import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import classes from './carousel.module.css'

/**
 * The function `ImageCarousel` is a React component that renders a carousel of images with responsive
 * breakpoints.
 * @returns The ImageCarousel component is being returned.
 */


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function ImageCarousel({ recipe }) {

  const { images, title } = recipe;
  
  return (

    <Carousel responsive={responsive} keyBoardControl={true}>

      <div className={classes.container}>

        {images.map((image, index) => (

          <Image src={image} key={index} width={200} height={200} alt={title} className={classes.imageStyle} />

        ))}

      </div>

    </Carousel>

  );

}
