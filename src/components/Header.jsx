import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <strong>ThiFeed</strong>
            <img src='./src/assets/legendas.svg' alt="asdfasdfasd" />
        </header>
    )
}