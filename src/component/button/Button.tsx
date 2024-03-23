"use client"

import styles from "./Button.module.scss"
import { useRouter } from "next/navigation";

type ButtonProps = {
    variant: 'transparent' | 'green' | 'red'
    redirect: string
    className?: string
    children: React.ReactNode
};

function Button({variant, redirect, className, children} : ButtonProps) {
    const router = useRouter();

    return (
        <button className={getClassName(variant, className)} onClick={() => router.push(redirect)}>
            {children}
        </button>
    );
}

function getClassName(variant: string, className: string | undefined) {
    return `${styles.button} ${styles[`button--${variant}`]} ${className}`;
}

export default Button;