import { Ref, ref } from 'vue';
import { dependencyContainer } from '@/dependency-container';
import { Article } from '@/domain/article/article';
import { toast } from '../toast';

const articles: Ref<Article[]> = ref([]);

export function getShoppingCart() {
  const {
    allShoppingCartArticlesFinder,
    articleInserter,
    articleEraser
  } = dependencyContainer();
  const { showInfoToast, showSuccessToast } = toast();

  function insertArticle(article: Article) {
    articleInserter.insert(article);
    getArticles();
    showSuccessToast('Article added', article.name, article.id);
  }

  function removeArticle(article: Article) {
    articleEraser.erase(article.id);
    getArticles();
    showInfoToast('Article removed', article.name, article.id);
  }

  function getArticles() {
    const articlesFound: Article[] = allShoppingCartArticlesFinder.find();
    articles.value.splice(0, articles.value.length, ...articlesFound);
  }

  function getArticlesGroupedById() {
    return new Map<Article, number>(
      articles.value
        .filter((v, i, a) => a.findIndex(t => t.id === v.id) === i)
        .sort((a, b) => a.id.localeCompare(b.id))
        .map(article => {
          const articlesGrouped: number = articles.value.filter(
            art => art.id === article.id
          ).length;
          return [article, articlesGrouped];
        })
    );
  }

  return {
    insertArticle,
    removeArticle,
    articles,
    getArticles,
    getArticlesGroupedById
  };
}
