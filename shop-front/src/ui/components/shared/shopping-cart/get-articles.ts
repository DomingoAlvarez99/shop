//import { ShoppingCart } from '@/domain/shopping-cart/shopping-cart';
import { Ref, ref } from 'vue';
import { dependencyContainer } from '@/dependency-container';
import { Article } from '@/domain/article/article';

const articles: Ref<Article[]> = ref([]);

export function getCartArticles() {
  const { allShoppingCartArticlesFinder } = dependencyContainer();

  function getArticles() {
    const articlesFound: Article[] = allShoppingCartArticlesFinder.find();
    articles.value.splice(0, articles.value.length, ...articlesFound);
  }

  function articlesGroupedById() {
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
    getArticles,
    articles,
    articlesGroupedById
  };
}
