import React from 'react';
import './MealItem.css'

const MealItem = (props) => {
    const {strMeal, strCategory, strArea,strMealThumb} = props.data;
    console.log(props.data)
    
    return (
        <div className='item'>
            <img src={strMealThumb} alt="" />
            <h3>Item Name: {strMeal}</h3>
            <h4>Category: {strCategory}</h4>
            <p>Area: {strArea}</p>
            
        </div>
    );
};

export default MealItem;