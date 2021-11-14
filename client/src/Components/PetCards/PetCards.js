import { React, useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import PetCardV2 from './PetCardV2/PetCardV2.js';
import './PetCards.css';
// Importing styles (basically CSS in JS)
//import useStyles from './styles';

const PetCards = (props) => {
    //const classes = useStyles(); // Adding a classname={classes.<componentName styles in styles.js}
    const [cards, setCards] = useState([]);

    useEffect(() => {
        let arr = props.pets;
        let res = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].photos[0])
                res[i] = (<PetCardV2 name={arr[i].name} breed={arr[i].breeds.primary} age={arr[i].age} photo={arr[i].photos[0].small} />)
            // console.log(arr[i].primary_photo_cropped.small);
            // console.log(arr[i].name);
            console.log(arr[i].photos[0])
        }
        setCards(res);
    }, [props.pets])

    return (
        <Grid className="grid-container" container justify='space-around' alignItems='stretch' spacing={1}>
            {cards}
        </Grid>
    );
};

export default PetCards;
