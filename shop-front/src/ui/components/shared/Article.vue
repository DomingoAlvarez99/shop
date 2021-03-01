<template>
  <div class="article">
    <Card>
      <template #header>
        <img
          alt="Article header"
          :src="require('@/ui/assets/articlecard.png')"
        />
      </template>
      <template #title>
        {{ article.name }}
      </template>
      <template #content>
        {{ article.description }}
      </template>
      <template #footer>
        <div class="p-grid article-footer">
          <div class="p-col-2 add-cart-item-container">
            <span>
              <i class="pi pi-plus p-text-secondary" @click="addItem"></i>
            </span>
          </div>
          <div class="p-col-10">
            <Button label="Show details" />
          </div>
        </div>
      </template>
    </Card>
    <Toast position="top-left" :group="String(article.id)" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import { Article } from '@/domain/article/article';
import { insertCartArticle } from './shopping-cart/insert-article';

export default defineComponent({
  name: 'Article',
  props: {
    article: {
      type: Object as PropType<Article>,
      required: true
    }
  },
  setup(props) {
    const { article } = toRefs(props);
    const { insertArticle } = insertCartArticle();

    const addItem = () => {
      insertArticle(article.value);
    };

    return {
      article,
      addItem
    };
  }
});
</script>

<style lang="scss" scoped>
.article {
  padding: 3rem 2rem;
}
.article-footer {
  padding: 0.5rem;
  justify-content: center;

  button {
    width: 100%;
  }

  .add-cart-item-container {
    font-size: 1.35rem;
    border-radius: 10%;

    i {
      font-size: 1.35rem;
      cursor: pointer;
      padding: 0.5rem;
    }
    i:hover {
      color: $secondaryColor;
      border-radius: 100%;
      background-color: rgba($secondaryColor, 0.15);
    }
  }
}
</style>
