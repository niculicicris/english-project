import styles from "./Button.module.scss"

type ButtonProps = {
    variant: 'transparent' | 'green' | 'red'
    redirect: string
    children: React.ReactNode
};

function Button({variant, redirect, children} : ButtonProps) {
    return (
        <button className={getClassName(variant)}>
            {children}
        </button>
    );
}

function getClassName(variant: string) {
    return `${styles.button} ${styles[`button--${variant}`]}`;
}

export default Button;