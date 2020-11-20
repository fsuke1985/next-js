import Link from 'next/link'

const Index = ({ data }) => {
    return (
        <>
            <div>gh pages 02</div>
            <Link href="/gh-01">
                <a>gh-01</a>
            </Link>
            <p>mod</p>
            { data }
        </>
    )
}

export default Index


