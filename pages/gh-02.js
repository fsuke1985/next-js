import Link from 'next/link'
import Layout from 'components/layout';

const Index = ({ data }) => {
    return (
        <Layout home={false}>
            <div>gh pages 02</div>
            <Link href="/gh-01">
                <a>gh-01</a>
            </Link>
            <p>mod</p>
            { data }
        </Layout>
    )
}

export default Index
