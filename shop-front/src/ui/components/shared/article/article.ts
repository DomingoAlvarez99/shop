import { dependencyContainer } from "@/dependency-container";
import { Article } from "@/domain/article/article";
import { Criteria } from "@/domain/shared/criteria/criteria";
import { ref, Ref } from "vue";

const articles: Ref<Article[]> = ref([]);

export function getArticles() {
  const { articlesFinder } = dependencyContainer();

  function find(criteria: Criteria<Article>) {
    articles.value = articlesFinder.find(criteria);
  };

  return {
    find,
    articles
  };
}