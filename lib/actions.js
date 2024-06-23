'use server'

import { redirect } from "next/navigation"
import { saveMeal } from "./meals"
import { revalidatePath } from "next/cache"

export const shareMeal = async (prevState, formData) => {
    'use server'
    console.log(formData)

    const isInvalidText = (text) => {
        return !text || text.trim()===''
    }

    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),

    }

    if(
        isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image || meal.image.size === 0
    ) {
        return {
            msg: 'Invalid input.'
        }
    }
    

    console.log(meal)
    await saveMeal(meal)
    // for agreesive caching on prod server render 
    revalidatePath('/meals', 'layout'); // : Wrapping nested pages withing meals path
    redirect('/meals')
}