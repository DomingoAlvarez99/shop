import { Article } from '@/domain/article/article';
import { ShoppingCartRepository } from '@/domain/shopping-cart/shopping-cart-repository';

export class AllArticlesFinder {
  public constructor(
    private readonly shoppingCartRepository: ShoppingCartRepository
  ) {}

  public find(): Article[] {
    return this.shoppingCartRepository.get().articles;
  }
}
