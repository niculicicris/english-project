import Article from "@/component/article/Article";
import styles from "./page.module.scss";

function Example() {
    return (
        <section>
            <Article
                icon="/icon/internet_banking.png"
                title="Internet Banking"
                author="Eduard Moldovan"
                nextArticle="transactions"
            >
                <img
                    style={{ borderRadius: "15px" }}
                    src="/internet-banking/internet-banking.png"
                    height="300"
                    width="770"
                />
                <h1>How does internet banking work?</h1>
                <p>
                    Also known as virtual, internet, web, electronic, or
                    e-banking, online banking is a method of banking that allows
                    users to access their bank accounts through the internet
                    using a computer, smartphone or even smartwatch. It works by
                    connecting to a bank server and requesting/responding with
                    data through a secure API (Application Programming
                    Interface).
                </p>

                <p>Through internet banking, you can:</p>
                <ul className={styles.list}>
                    <li>
                        Transfer money from one account to another anywhere in
                        the world in a matter of seconds
                    </li>
                    <li>Pay bills</li>
                    <li>Check the account monetary balance anywhere</li>
                    <li>Open new accounts without going to a local bank</li>
                </ul>

                <h1>How is internet banking secured?</h1>
                <ul className={styles.list}>
                    <li>
                        <b>MFA (Multi Factor Authentication)</b>: this involves
                        using 2 or more identification methods: what the user
                        knows (password), what the user has (TOTP (time-based
                        one time password, a code sent through an email or
                        another application), or hardware keys (physical devices
                        that, once inserted in a device, confirms the identity
                        of the user)) and what the user is (biometrics, such as
                        fingerprints, facial recognition and retina scan).{" "}
                    </li>
                    <li>
                        <b>Encryption</b>: sensitive data such as name, address,
                        account balance are transmitted and stored encrypted, so
                        even if an attacker gains access to sensitive data, it
                        can't read that data, only the bank and the user know
                        how to decrypt that information.
                    </li>
                    <li>
                        <b>Payment blocking</b>: automated systems (which
                        generally use artificial intelligence) will detect
                        suspicious activities (such as withdrawal of large
                        amounts of money, making multiple operations
                        simultaneously, logging in from unusual locations) and
                        block them to ensure that users' accounts are not
                        compromised even if an attacker was using the
                        information of a user.
                    </li>
                </ul>

                <h1>
                    How can you protect yourself against internet banking
                    attacks?
                </h1>
                <ul className={styles.list}>
                    <li>
                        <b>Use strong and unique passwords</b>: use an unique
                        password for each website, especially for internet
                        banking and government websites. A good password should
                        be at least 16 characters long and should make use of
                        uppercase letters, lowercase letters, digits and special
                        characters.
                    </li>
                    <li>
                        <b>Avoid public Wi-Fi</b>: public Wi-Fi networks will
                        connect all people that use it, which means that there
                        are high chances of your data and private contents
                        getting leaked. Malware can also enter your device if
                        you are not careful.
                    </li>
                    <li>
                        <b>Switch on text alerts</b> (if your bank's app has
                        this feature): also called SMS alerts, this feature
                        improves the security by immediately notifying you in
                        the event of an unauthorized transaction, giving you
                        some time to secure your account. In this way, you can
                        spot suspicious activity, including unauthorized access,
                        and take appropriate action fast.
                    </li>
                </ul>

                <h1>References:</h1>
                <a href="https://www.kaspersky.com/resource-center/preemptive-safety/internet-banking-security-keep-fraudsters-away">
                    Internet banking security to keep fraudsters away
                </a>
                <a href="https://www.clickssl.net/blog/security-measures-for-online-banking">
                    Online Banking Security - 10 Security Measures for Online
                    Banking
                </a>
                <a href="https://www.agerpres.ro/data/stiri_ots/2021/10/05/banking.png">
                    Image
                </a>
            </Article>
        </section>
    );
}

export default Example;
