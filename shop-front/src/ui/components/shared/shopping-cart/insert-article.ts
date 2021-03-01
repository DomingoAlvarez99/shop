//import { ShoppingCart } from '@/domain/shopping-cart/shopping-cart';
import { dependencyContainer } from '@/dependency-container';
import { Article } from '@/domain/article/article';
import { toast } from '../toast';
import { getCartArticles } from './get-articles';

export function insertCartArticle() {
  const { articleInserter } = dependencyContainer();
  const { showSuccessToast } = toast();
  const { getArticles } = getCartArticles();

  function insertArticle(article: Article) {
    articleInserter.insert(article);
    getArticles();
    showSuccessToast('Article added', article.name, article.id);
  }

  return {
    insertArticle
  };
}
