"use client"

import Image from "next/image";
import Button from "@/component/button/Button";
import styles from "./NavBar.module.scss"
import { useRouter } from "next/navigation";

function NavBar() {
    const router = useRouter();

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo} onClick={() => router.push('/')}>
                <Image src="/logo/logo.png" width={48} height={48} alt=""></Image>
                <h3>Financial Security</h3>
            </div>
            <Button variant="green" redirect="/article/internet-banking">
                Articles
            </Button>
        </nav>
    );
}

export default NavBar;