import { Article } from '../article/article';
import { ShoppingCart } from './shopping-cart';

export interface ShoppingCartRepository {
  get(): ShoppingCart;
  addArticle(article: Article): void;
  remove(): void;
  removeArticle(articleId: string): void;
}
