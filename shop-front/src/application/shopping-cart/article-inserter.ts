import { Article } from '@/domain/article/article';
import { ShoppingCartRepository } from '@/domain/shopping-cart/shopping-cart-repository';

export class ArticleInserter {
  public constructor(
    private readonly shoppingCartRepository: ShoppingCartRepository
  ) {}

  public insert(article: Article): void {
    this.shoppingCartRepository.addArticle(article);
  }
}
