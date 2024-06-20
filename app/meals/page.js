import MealsGrid from '@/components/meals/meals-grid'
import {getMeals} from '@/lib/meals'

import classes from './page.module.css'

import Link from "next/link"
import { Suspense } from 'react'

const Meals = async() => {
    const mealsGridData = await getMeals()
    return <MealsGrid meal={mealsGridData}/>
}

const MealsPage = async() => {

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
                <Suspense fallback={
                    <p className={classes.loading}>
                    Fetching meals ...
                </p>
                }>
                   <Meals/>
                </Suspense>
                
            </main>
        </>

    )
}

export default MealsPage