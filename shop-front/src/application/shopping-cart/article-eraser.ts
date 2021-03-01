import { ShoppingCartRepository } from '@/domain/shopping-cart/shopping-cart-repository';

export class ArticleEraser {
  public constructor(
    private readonly shoppingCartRepository: ShoppingCartRepository
  ) {}

  public erase(id: string): void {
    this.shoppingCartRepository.removeArticle(id);
  }
}
