import sql from 'better-sqlite3'

const sqlDb = sql('meals.db')

export const getMeals = async() => {
    return sqlDb.prepare('SELECT * FROM meals').all()
}

export const getMeal = async(slug) =>{
    return sqlDb.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}





