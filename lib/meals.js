import fs from 'node:fs'

import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'
import { error } from 'node:console'

const sqlDb = sql('meals.db')

export const getMeals = async () => {
    return sqlDb.prepare('SELECT * FROM meals').all()
}

export const getMeal = async (slug) => {
    return sqlDb.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export const saveMeal = async (meal) => {
    meal.slug = slugify(meal.title, { lower: true })
    meal.instructions = xss(meal.instructions)

    const extension = meal.image.name.split('.').pop()
    console.log(` --->> extension`, {extension})
    const fileName = `${meal.slug}.${extension}`

    const stream = fs.createWriteStream(`public/images/${fileName}`)
    const bufferedImage = await meal.image.arrayBuffer()

    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error('Saving image error')
        }
    })

    console.log(`->>>,${meal.slug}`)

    meal.image = `/images/${fileName}`
    console.log("==============")
    console.log(meal)
    console.log("==============")
    console.log("==============")

    sqlDb.prepare(`
        INSERT INTO meals
        (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
            
            @title,
            @summary,
            @instructions,
            @creator,
            @creator_email,
            @image,
            @slug
        )
        `).run(meal)

}



