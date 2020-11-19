import Link from 'next/link'
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'

export default () => {
    return (
        <>
            <div className={styles.container}>Welcome gh pages</div>
            <Link href="/gh-02">
                <a className={utilStyles.colorInherit}>gh-02</a>
            </Link>
        </>
    )
}
