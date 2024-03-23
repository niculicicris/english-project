import Button from "../button/Button";
import Image from "next/image";
import styles from "./ArticleNavigator.module.scss"

type ArticleNavigatorProps = {
    previousArticle?: string
    nextArticle?: string
};

function ArticleNavigator({previousArticle, nextArticle} : ArticleNavigatorProps) {
    return (
        <div className={styles.navigator}>
            {previousArticle ? 
            <Button variant="red" className={styles.button} redirect={previousArticle}>
                <Image src="/icon/previous_arrow.png" width={32} height={32} alt=""></Image>
                <p>Previous Article</p>
            </Button> : null}

            {nextArticle ?
            <Button variant="green" className={styles.button} redirect={nextArticle}>
                <Image src="/icon/next_arrow.png" width={32} height={32} alt=""></Image>
                <p>Next Article</p>
            </Button> : null}
        </div>
    );
}

export default ArticleNavigator;