import { Article } from '@/domain/article/article';
import { ArticleRepository } from '@/domain/article/article-repository';
import { Criteria } from '@/domain/shared/criteria/criteria';

export class ArticleInMemoryRepository implements ArticleRepository {

  private static readonly articles: Article[] = [
    {
      id: '111',
      stock: 11,
      price: 11,
      name: 'Article 1',
      description: 'Desc 1'
    },
    {
      id: '222',
      stock: 11,
      price: 11,
      name: 'Article 2',
      description: 'Desc 2'
    },
    {
      id: '333',
      stock: 11,
      price: 11,
      name: 'Article 3',
      description: 'Desc 3'
    },
    {
      id: '444',
      stock: 11,
      price: 11,
      name: 'Article 4',
      description: 'Desc 4'
    }
  ]

  public find(criteria: Criteria<Article>): Article[] {
    return criteria.handle(ArticleInMemoryRepository.articles);
  }
}
