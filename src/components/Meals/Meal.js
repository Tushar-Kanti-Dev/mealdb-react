import React, { useState } from 'react';
import MealItem from '../MealItem/MealItem';
import './Meal.css'

const Meal = () => {
    const [search, setSearch] = useState('');
    const [Mymeal, setMeal] = useState();
    const searchMeal = (evt) =>{
        if(evt.key ==='Enter'){
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
            .then(data => setMeal(data.meals));
        }
    }
 
    return (
        <div>
            <h2>FOOD RECIPE</h2>
            <div className='search-box'>
                <input type="text" placeholder='Find Your Food'onChange={(e)=> setSearch(e.target.value)} value={search} onKeyUp={searchMeal}/>
            </div>
            <div className='meal-container'>
            {
                (Mymeal==null)? <p className='not-av'>Not Available Food</p>:Mymeal.map((res)=>{
                    return(
                        <MealItem        
                        data={res}
                        >

                        </MealItem>
                    )
                })
            }
            </div>
        </div>
    );
};

export default Meal;