import { ref, Ref } from 'vue';

export function menu() {
  const items: Ref<object[]> = ref([]);

  return {
    items
  };
}
