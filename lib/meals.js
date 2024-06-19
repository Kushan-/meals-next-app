import sql from 'better-sqlite3'

const sqlDb = sql('meals.db')

const getMeals = async() => {
    return sqlDb.prepare('SELECT * FROM meals').all()
}

export default getMeals