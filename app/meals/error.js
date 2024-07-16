'use client'

const Error = ( {error} ) =>{
    return(
        <main className="error">
            <h1> An error occured!</h1>
            <p>{error}</p>
        </main>
    )
}

export default Error