<template>
  <nuxt-layout
    name="default"
  >
    <layout-cart-list
      v-model:name="payload.name"
      :items="cart.items"
      @add:cart-item="onAddItem"
    />
  </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ItemType, useCart } from '../store/cart';

export default defineComponent({
  name: 'HomePage',
  setup () {
    useHead({
      title: 'Pinia Cart'
    });
    const cart = useCart();
    const payload: ItemType = reactive({
      name: null,
      price: 1000,
      count: 1
    });
    const onAddItem = () => {
      try {
        if (!payload.name) {
          throw new Error('이름을 입력해주세요');
        }
        const item = { ...payload };
        const isUnique = !cart.items.find(i => i.name === item.name);
        if (isUnique) {
          cart.addItem(item);
        } else {
          cart.updateByName(item.name, item);
        }
      } catch (e) {
        window.alert(e.message);
      } finally {
        payload.name = null;
      }
    };
    return {
      cart,
      payload,
      onAddItem
    };
  }
});
</script>
