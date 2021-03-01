import { dependencyContainer } from '@/dependency-container';
import { Article } from '@/domain/article/article';
import { toast } from '../toast';
import { getCartArticles } from './get-articles';

export function removeCartArticle() {
  const { articleEraser } = dependencyContainer();
  const { showInfoToast } = toast();
  const { getArticles } = getCartArticles();

  function removeArticle(article: Article) {
    articleEraser.erase(article.id);
    getArticles();
    showInfoToast('Article removed', article.name, article.id);
  }

  return {
    removeArticle
  };
}
