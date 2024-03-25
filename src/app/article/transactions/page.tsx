import Article from "@/component/article/Article";
import styles from "./page.module.scss";

function Example() {
    return (
        <section>
            <Article icon="/icon/transactions.png" 
                    title="Transactions" 
                    author="Eduard Fekete" 
                    previousArticle="internet-banking"
                    nextArticle="government-regulations">
                        
                <img
                    style={{ borderRadius: "15px" }}
                    src="\transactions\payment-security.jpg"
                    height="300"
                    width="770"
                />

                <h1>What is transaction security?</h1>
                <p>Transaction  security encompasses the systems, processes, and measures utilized to safeguard financial transactions from unauthorized access, data breaches, and fraud. It is vital for both online and offline businesses, ensuring customer confidence, reducing financial losses, and complying with regulations.</p>
                <h2>Why secure checkout is important</h2>
                <p>Secure checkout is crucial for customers and businesses alike. Customers gain peace of mind knowing their data is safe, avoiding risks like identity theft. For businesses, it builds trust, enhances reputation, and mitigates financial and legal risks.</p>
                <ul className={styles.list}>
                    <li>
                        <b>Customer Information Protection: </b>Ensures confidentiality and prevents unauthorized access or theft of customer data.
                    </li>
                    <li>
                        <b>Trust and Confidence: </b>Builds long-term customer relationships and encourages repeat purchases.
                    </li>
                    <li>
                        <b>Fraud Prevention: </b>Minimizes risks like unauthorized transactions or identity theft.
                    </li>
                    <li>
                        <b>Regulatory Compliance: </b>Ensures adherence to data protection regulations like GDPR.
                    </li>
                    <li>
                        <b>Reduced Cart Abandonment: </b>Prevents customers from abandoning purchases due to security concerns.
                    </li>
                    <li>
                        <b>Reputation Protection: </b>Safeguards business reputation against damage from security incidents.
                    </li>
                    <li>
                        <b>Legal and Financial Risk Mitigation: </b>Minimizes risks associated with data breaches and non-compliance.
                    </li>
                    <li>
                        <b>Competitive Differentiation: </b>Prioritizes security, making the business more appealing than competitors.
                    </li>
                    <li>
                        <b>Positive Customer Experience: </b>Ensures customer satisfaction and encourages return visits.
                    </li>
                    <li>
                        <b>Long-term Success: </b>Crucial for sustained success and trust in e-commerce.
                    </li>
                </ul>

                <h3>Types of transactions security</h3>

                <ul className={styles.list}>
                    <li>
                        <b>Encryption: </b>Protects data during transmission using protocols like SSL/TLS.
                    </li>
                    <li>
                        <b>Tokenization: </b>Replaces sensitive data with tokens to deter theft.
                    </li>
                    <li>
                        <b>Authentication: </b>Verifies user identity through methods like 2FA or MFA.
                    </li>
                    <li>
                        <b>Fraud Detection: </b>Utilizes algorithms to identify and prevent fraudulent transactions.
                    </li>
                    <li>
                        <b>PCI DSS Compliance: </b>Adheres to standards to maintain a secure environment.
                    </li>
                    <li>
                        <b>Firewall and Network Security: </b>Protects infrastructure from external threats.
                    </li>
                </ul>

                <p>Each method plays a crucial role in safeguarding transactions and customer data, ensuring a secure and trustworthy online environment.</p>
                

                <h4>References:</h4>
                <a href="https://stripe.com/en-ro/resources/more/payment-security">
                    Payment security: An in-depth, actionable guide
                </a>
                <a href="https://appsero.com/user-guide/guide-to-secure-checkout/">
                    A Comprehensive Guide to Secure Checkout for Your Products
                </a>
                <a href="https://www.outseer.com/payment-security/what-is-payment-security/">
                    Image
                </a>
            </Article>
        </section>
    );
}

export default Example;