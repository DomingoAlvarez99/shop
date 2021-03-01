import { ShoppingCart } from '@/domain/shopping-cart/shopping-cart';
import { Article } from '@/domain/article/article';
import { ShoppingCartRepository } from '@/domain/shopping-cart/shopping-cart-repository';

export class ShoppingCartLocalRepository implements ShoppingCartRepository {
  private static readonly SHOPPING_CART_KEY = 'SHOPPING_CART';

  constructor(private readonly window: Window) {}

  public remove(): void {
    this.window.localStorage.removeItem(
      ShoppingCartLocalRepository.SHOPPING_CART_KEY
    );
  }

  public removeArticle(articleId: string): void {
    const shoppingCart = this.getShoppingCar();

    const articleSearched: Article = shoppingCart.articles.find(
      art => art.id === articleId
    )!;

    const idx = shoppingCart.articles.indexOf(articleSearched);

    if (idx == -1) {
      throw new Error(
        `Error, could not remove the article: ${articleSearched.id}`
      );
    }

    shoppingCart.articles.splice(idx, 1);

    this.saveShoppingCart(shoppingCart);
  }

  public get(): ShoppingCart {
    return this.getShoppingCar();
  }

  public addArticle(article: Article): void {
    const shoppingCart = this.getShoppingCar();

    shoppingCart.articles.push(article);

    this.saveShoppingCart(shoppingCart);
  }

  private saveShoppingCart(shoppingCart: ShoppingCart): void {
    this.window.localStorage.setItem(
      ShoppingCartLocalRepository.SHOPPING_CART_KEY,
      JSON.stringify(shoppingCart)
    );
  }

  public getShoppingCar(): ShoppingCart {
    const foundShoppingCart =
      this.window.localStorage.getItem(
        ShoppingCartLocalRepository.SHOPPING_CART_KEY
      ) ?? undefined;

    if (foundShoppingCart === undefined) {
      return {
        id: '',
        articles: []
      };
    }

    return JSON.parse(foundShoppingCart);
  }
}
