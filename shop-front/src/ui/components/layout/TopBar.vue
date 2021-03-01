<template>
  <div>
    <Menubar :model="items">
      <template #end>
        <span class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText
            v-model="nameFilter"
            type="text" 
            placeholder="Search" 
          />
        </span>
        <span class="shopping-cart-icon-container">
          <i
            class="pi pi-shopping-cart p-text-secondary shopping-cart-icon"
            @click="updateVisibility"
          >
            <Badge
              :value="`${articles.length}`"
              class="shopping-cart-badge p-mr-2"
            >
            </Badge>
          </i>
        </span>
      </template>
    </Menubar>
    <Sidebar
      v-model:visible="isVisible"
      :baseZIndex="1000"
      position="right"
      :showCloseIcon="false"
    >
      <h3 class="shopping-cart-title">Shopping cart</h3>
      <ScrollPanel style="width: 100%; height: 925px">
        <div
          class="article-container"
          v-for="entry in articlesGroupedById().entries()"
          :key="entry"
        >
          <p class="article-item">
            {{ entry[0].name }}
            <span>
              <i
                class="pi pi-trash p-text-secondary delete-item-icon"
                @click="removeArticle(entry[0])"
              />
            </span>
          </p>
          <p class="article-units">
            Unidades: <span>{{ entry[1] }}</span>
          </p>
        </div>
      </ScrollPanel>
    </Sidebar>
    <Toast position="top-left" group="ad" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { sidebar } from './sidebar';
import { menu } from './menu';
import { filter } from './filter-articles';
import { removeCartArticle } from '@/ui/components/shared/shopping-cart/remove-article';
import { getCartArticles } from '@/ui/components/shared/shopping-cart/get-articles';

export default defineComponent({
  name: 'TopBar',
  setup() {
    const { isVisible, updateVisibility } = sidebar();
    const { items } = menu();
    const { removeArticle } = removeCartArticle();
    const { getArticles, articles, articlesGroupedById } = getCartArticles();
    const { nameFilter } = filter();
    
    onMounted(() => {
      getArticles();
    });

    return {
      items,
      isVisible,
      updateVisibility,
      removeArticle,
      articles,
      articlesGroupedById,
      nameFilter
    };
  }
});
</script>

<style lang="scss" scoped>
.shopping-cart-icon-container {
  vertical-align: middle !important;
  margin-left: 3rem;
}
.shopping-cart-icon {
  cursor: pointer;
  font-size: 2rem;
}
.shopping-cart-badge {
  vertical-align: top;
  user-select: none;
}
i:hover {
  color: $secondaryColor;
}
.shopping-cart-title {
  text-align: center;
  margin-bottom: 3rem;
}
.article-container {
  vertical-align: middle;
  font-size: 1.1rem;
  padding: 0 1rem;
  border-bottom: 1px solid gainsboro;
}
.article-units {
  font-size: 0.85rem;
  color: gray;

  span {
    float: right;
  }
}
.delete-item-icon {
  cursor: pointer;
  float: right;
}
.delete-item-icon:hover {
  color: red;
}
</style>
