import  {React,useState} from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import styles from "./userrating.module.css"


export default function Basic() {
  const [value, setValue] = useState(2);

  return (
    <div className={styles.ratingnew} >
      <Rating
       name="simple-controlled"
        className={styles.abc}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
     
    </div>
  );
}