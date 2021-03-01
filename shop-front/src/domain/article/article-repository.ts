import { Criteria } from '../shared/criteria/criteria';
import { Article } from './article';

export interface ArticleRepository {
  find(criteria: Criteria<Article>): Article[];
}