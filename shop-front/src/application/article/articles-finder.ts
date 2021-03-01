import { Article } from '@/domain/article/article';
import { ArticleRepository } from '@/domain/article/article-repository';
import { Criteria } from '@/domain/shared/criteria/criteria';

export class ArticlesFinder {
  public constructor(
    private readonly articleRepository: ArticleRepository
  ) {}

  public find(criteria: Criteria<Article>): Article[] {
    return this.articleRepository.find(criteria);
  }
}
