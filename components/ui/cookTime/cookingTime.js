import { FaClock } from 'react-icons/fa';
import classes from './cookingTime.module.css'
import formatTime from '@/helpers/timeFormatter';

export default function CookingTime({ cookTimeInMinutes, label, prepTimeInMinutes }) {
  
  
    const formattedLabel = label.toLowerCase();
  
    const formattedTime = formattedLabel === 'total time' ? formatTime(cookTimeInMinutes + prepTimeInMinutes) : formatTime(cookTimeInMinutes);
  
    return (

      <div className={classes.time}>

        <FaClock className={classes.timeIcon}/>
        <h4 className={classes.label}><b>{label}:</b> {formattedTime}</h4>

      </div>
    );
    
  };
  
  