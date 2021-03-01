<template>
  <div class="home">
    <div class="p-grid">
      <div
        v-for="article in articles"
        :key="article.id"
        class="p-sm-12 p-md-4 p-xl-3"
      >
        <Article :article="article" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Article } from '@/domain/article/article';
import { Criteria } from '@/domain/shared/criteria/criteria';
import { FilterHandler } from '@/domain/shared/criteria/filter-handler';
import { FilterType } from '@/domain/shared/criteria/filter-type';
import { defineAsyncComponent, defineComponent, onMounted } from 'vue';
import { getArticles } from '../shared/article/article';

export default defineComponent({
  name: 'Home',
  components: {
    Article: defineAsyncComponent({
      loader: () => import('@/ui/components/shared/article/Article.vue')
    })
  },
  setup() {
    const { articles, find } = getArticles();

    onMounted(() => {
      const criteria: Criteria<Article> = new Criteria(
        new FilterHandler(
          [],
          FilterType.AND
        ), 
        0,
        4
      );

      find(criteria);
    });

    return {
      articles
    };
  }
});
</script>
