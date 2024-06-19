import MealItem from "./meal-item"
import classes from "./meals-grid.module.css"

const MealsGrid = ({ meal }) => {
    
    return (
        
        <ul className={classes.meals}>
            {
                meal.map((meal) => (
                    <li key={meal.id}>
                        <MealItem {...meal} />
                    </li>
                    )
                )
            }
        </ul>

    )
}

export default MealsGrid