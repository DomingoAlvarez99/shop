import { ArticleInserter } from './application/shopping-cart/article-inserter';
import { AllArticlesFinder } from './application/shopping-cart/all-articles-finder';
import { ShoppingCartRepository } from './domain/shopping-cart/shopping-cart-repository';
import { ShoppingCartLocalRepository } from './infrastructure/shopping-cart/shopping-cart-local-repository';
import { ArticleEraser } from './application/shopping-cart/article-eraser';
import { ArticlesFinder } from './application/article/articles-finder';
import { ArticleRepository } from './domain/article/article-repository';
import { ArticleInMemoryRepository } from './infrastructure/article/article-in-memory-repository';

const shoppingCartRepository: ShoppingCartRepository = new ShoppingCartLocalRepository(window);
const articleRepository: ArticleRepository = new ArticleInMemoryRepository();
const articleInserter: ArticleInserter = new ArticleInserter(shoppingCartRepository);
const allShoppingCartArticlesFinder: AllArticlesFinder = new AllArticlesFinder(shoppingCartRepository);
const articleEraser: ArticleEraser = new ArticleEraser(shoppingCartRepository);
const articlesFinder: ArticlesFinder = new ArticlesFinder(articleRepository);

export function dependencyContainer() {
  return {
    articleInserter,
    allShoppingCartArticlesFinder,
    articleEraser,
    articlesFinder
  };
}
