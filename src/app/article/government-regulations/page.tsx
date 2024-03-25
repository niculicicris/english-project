import Article from "@/component/article/Article";

function Example() {
    return (
        <section>
            <Article icon="/icon/government_regulations.png" 
                    title="Government Regulations   "    
                    author="Cristian-Florin Niculici" 
                    previousArticle="transactions">
                <img
                    style={{ borderRadius: "15px" }}
                    src="/government-regulations/government-regulations.jpeg"
                    height="300"
                    width="864"
                />

                <h1>
                    Introduction
                </h1>
                <p>
                    The rise of cyberattacks targeting the financial sector has forced the 
                    establishment of several mandatory cybersecurity regulations. Though often considered
                    an unnecessary burden on security teams, regulatory compliance is one of the most 
                    effective strategies for keeping financial services secure.
                </p>
                <p>
                    Regulations on digital finance systems security typically encompass a range of measures 
                    aimed at safeguarding sensitive financial information and ensuring the integrity of digital 
                    transactions. These may include requirements for strong encryption protocols, secure 
                    authentication methods, regular security audits and assessments.
                </p>
                <p>
                    Cybersecurity regulations must be malleable to remain relevant in a rapidly evolving
                    threat landscape. This means the financial sector must constantly keep track of 
                    changes to existing regulations as well as the establishment of new information security standards.
                </p>

                <h1>
                    Popular Regulations
                </h1>
                <p>
                    <strong>General Data Protection Regulation (GDPR)</strong>: GDPR sets comprehensive standards for data 
                    protection and privacy, applicable to all individuals within the European Union (EU) 
                    and the European Economic Area (EEA). It mandates strict requirements for handling personal 
                    data, including financial information, and imposes significant penalties for non-compliance.
                </p>
                <p>
                    <strong>Payment Card Industry Data Security Standard (PCI DSS)</strong>: PCI DSS is a globally recognized 
                    set of security standards designed to safeguard credit card data during payment 
                    transactions. While not legally mandated in all jurisdictions, it is widely adopted by 
                    organizations worldwide to prevent data breaches and fraud in digital payment systems.
                </p>
                <p>
                    <strong>Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF) Regulations</strong>: AML and 
                    CTF regulations are essential for preventing illicit financial activities globally. Led 
                    by international bodies like the Financial Action Task Force (FATF), these regulations 
                    require financial institutions to implement robust measures for customer due diligence, 
                    transaction monitoring, and reporting to detect and prevent money laundering and terrorist 
                    financing activities. Compliance with AML and CTF regulations is crucial for ensuring the 
                    integrity and security of digital financial systems worldwide.
                </p>

                <h1>
                    Frameworks
                </h1>
                <p>
                    Digital financial systems security frameworks are sets of guidelines, best practices, 
                    and standards established to ensure the security of the systems. These frameworks are not
                    mandatory yet their usage is recommended and their standards may become compulsory.
                </p>
                <p>
                    <strong>National Institute of Standards and Technology (NIST) Cybersecurity Framework</strong>:
                    This framework provides voluntary guidance for organizations to manage and reduce cybersecurity 
                    risk. It is organized around five core functions: Identify, Protect, Detect, Respond, and Recover. 
                    Each of these functions has a set of associated activities and outcomes that organizations can use 
                    to assess and improve their cybersecurity posture.
                </p>
                <p>
                    <strong>SWIFT Customer Security Controls Framework: </strong>
                    The Society for Worldwide Interbank Financial Telecommunication (SWIFT) Customer 
                    Security Controls Framework is a set of security controls that SWIFT member banks must 
                    implement in order to participate in the SWIFT network. The purpose of the Framework is 
                    to ensure that member banks have the necessary controls in place to protect the SWIFT 
                    network from cyber threats.
                </p>

                <h1>
                    The Future of Regulations
                </h1>
                <p>
                    The cyber security landscape is constantly evolving, and financial institutions are increasingly 
                    under attack from sophisticated cyber criminals. In order to stay ahead of the curve, 
                    it's important for new standards to be adopted and implemented by financial insitutions.
                </p>
                <p>
                    Artificial intelligence is currently being used to develop next-generation anti-malware 
                    solutions that are capable of detecting malware based on its behavior rather than just signatures. 
                </p>
                <p>
                    In terms of biometrics, this provides a much more secure form of authentication and access 
                    control than simple username and password combinations. Biometrics is significantly harder 
                    to imitate to compromise an account and is being used across several financial institutions 
                    as an option for users to log in.
                </p>

                <h1>
                    References
                </h1>
                <a href="https://www.upguard.com/blog/cybersecurity-regulations-financial-industry">
                    Top 8 Cybersecurity Regulations for Financial Services
                </a>
                <a href="https://getoppos.com/cyber-security-standards-for-financial-industry/">
                    Cyber Security Standards for Financial Services 
                </a>
                <a href="https://buyscrapapp.com/solutions/">
                    Image
                </a>
            </Article>
        </section>
    );
}

export default Example;