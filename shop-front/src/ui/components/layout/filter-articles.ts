import { Article } from "@/domain/article/article";
import { Criteria } from "@/domain/shared/criteria/criteria";
import { Filter } from "@/domain/shared/criteria/filter";
import { FilterHandler } from "@/domain/shared/criteria/filter-handler";
import { FilterOperator } from "@/domain/shared/criteria/filter-operator";
import { FilterType } from "@/domain/shared/criteria/filter-type";
import { ref, Ref, watch } from "vue"
import { getArticles } from "../shared/article/article";

export function filter() {
  const nameFilter: Ref<string> = ref('')
  const { find } = getArticles();

  watch(nameFilter, (newValue) => {
    const criteria: Criteria<Article> = new Criteria(
      new FilterHandler(
        [
          new Filter('name', newValue, FilterOperator.CONTAINS)
        ],
        FilterType.AND
      ), 
      0,
      4
    );

    find(criteria);
  });

  return {
    nameFilter
  };
}