import Button from "@/component/button/Button";
import styles from "./Header.module.scss"

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Your <span>Financial Security</span> Journey Begins Now
                </h1>
                <p className={styles.description}>
                    Delve into essential cybersecurity 
                    measures safeguarding the financial 
                    systems used by you
                </p>
            </div>
            <Button variant="transparent" redirect="/">
                Explore Articles
            </Button>
        </header>
    );
}

export default Header;