import MealsGrid from '@/components/meals/meals-grid'
import classes from './page.module.css'
import Link from "next/link"
import getMeals from '@/lib/meals'

const MealsPage = async() => {

    const meals = await getMeals();

    return (
        <>
            <header className={classes.header}>
                <h1>
                    delicious meals, created <span className={classes.highlight}>by you</span>
                </h1>
                <p>
                    Choose your own recipes
                </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">
                        Share your own recipes
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <MealsGrid meal={meals}/>
            </main>
        </>

    )
}

export default MealsPage