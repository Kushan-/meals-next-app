import Link from "next/link"

const CommunityPage = () =>{
    return (
        <main>
            <h1>
                For community
            </h1>
            <p>
                <Link href="/meals/share">Share</Link>
            </p>
        </main>
    )
}

export default CommunityPage