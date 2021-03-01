import { Article } from '../article/article';

export interface ShoppingCart {
  id: string;
  articles: Article[];
}
