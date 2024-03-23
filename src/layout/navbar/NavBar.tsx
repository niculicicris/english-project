import Image from "next/image";
import Button from "@/component/button/Button";
import styles from "./NavBar.module.scss"

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src="/logo/logo.png" width={48} height={48} alt=""></Image>
                <h3>Financial Security</h3>
            </div>
            <Button variant="green" redirect="/article">
                Articles
            </Button>
        </nav>
    );
}

export default NavBar;