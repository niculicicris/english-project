import Image from "next/image";
import styles from "./Article.module.scss"
import ArticleNavigator from "../article-navigator/ArticleNavigator";

type ArticleProps = {
    icon: string
    title: string
    author: string
    previousArticle?: string
    nextArticle?: string
    children: React.ReactNode
}

function Article({icon, title, author, previousArticle, nextArticle, children} : ArticleProps) {
    return (
        <article className={styles.article}>
            <div className={styles.header}>
                <Image src={icon} width={96} height={96} alt=""/>
                <div className={styles['header--content']}>
                    <h1>{title}</h1>
                    <p>{author}</p>
                </div>
            </div>
            <div className={styles.content}>
                {children}
            </div>
            <ArticleNavigator previousArticle={previousArticle ? `/article/${previousArticle}` : undefined} 
                            nextArticle={nextArticle ? `/article/${nextArticle}` : undefined}/>
        </article>
    );
}

export default Article;