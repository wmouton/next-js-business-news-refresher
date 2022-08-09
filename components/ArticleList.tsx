import { NextPage } from 'next';
import articleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'

const ArticleList: NextPage = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article: string) => (
        <ArticleItem key={articles.id} article={article} />
      ))}
    </div>
  )
}

export default ArticleList
