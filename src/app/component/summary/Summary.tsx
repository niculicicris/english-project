import Image from "next/image";
import styles from "./Summary.module.scss"

type SummaryCardProps = {
    image: string
    title: string
    children: React.ReactNode
};

function Summary() {
    return (
        <section className={styles.summary}>
            <div className={styles.header}>
                <h2>What will you learn?</h2>
                <p>
                    These are the main topics the project covers, 
                    representing the cornerstone of our exploration into 
                    cybersecurity within digital financial systems
                </p>
            </div>
            <div className={styles.cards}>
                <SummaryCard image="/icon/internet_banking.png" title="Internet Banking">
                    Lorem Ipsum is simply dummy text of 
                    the printing and typesetting industry.
                </SummaryCard>
                <SummaryCard image="/icon/transactions.png" title="Transactions">
                    Lorem Ipsum is simply dummy text of 
                    the printing and typesetting industry.
                </SummaryCard>
                <SummaryCard image="/icon/government_regulations.png" title="Government Regulations">
                    Lorem Ipsum is simply dummy text of 
                    the printing and typesetting industry.
                </SummaryCard>
            </div>
        </section>
    );
}

function SummaryCard({image, title, children} : SummaryCardProps) {
    return (
        <div className={styles.card}>
            <Image src={image} width={96} height={96} alt=""></Image>
            <h3>{title}</h3>
            <p>{children}</p>
        </div>
    );
}

export default Summary;