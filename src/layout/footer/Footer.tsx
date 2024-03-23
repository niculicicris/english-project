import Image from "next/image";
import styles from "./Footer.module.scss"

function Footer() {
    return (
        <footer className={styles.footer}>
            <Image src="/logo/logo.png" width={48} height={48} alt=""></Image>
            <h3>Financial Security by</h3>
            <h3 className={styles.team}>Eduard Fekete, Eduard Moldovan, Cristian-Florin Niculici</h3>
        </footer>
    );
}

export default Footer;