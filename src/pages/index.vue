<style lang="less" scoped>
  .index {
    .button--add-item {
      margin-top: 16px;
    }
  }
</style>

<template>
  <div class="index">
    <el-row
      justify="center"
    >
      <el-col
        :span="12"
      >
        <molecule-cart-list
          :items="cart.items"
        ></molecule-cart-list>
        <el-form
          @submit.prevent="onAddItem"
        >
          <el-form-item>
            <el-input
              v-model="payload.name"
              placeholder="상품명"
              size="large"
            ></el-input>
            <el-button
              class="button--add-item"
              size="large"
              type="primary"
            >
              카트에 아이템 추가하기
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ItemType, useCart } from '../store/cart';

export default defineComponent({
  setup() {
    const cart = useCart();
    const payload: ItemType = reactive({
      name: null,
      price: 1000,
      count: 1,
    });
    const onAddItem = () => {
      try {
        if (!payload.name) throw new Error('이름을 입력해주세요');
        const item = { ...payload };
        const isUnique = !cart.items.find((i) => i.name === item.name);
        if (isUnique) cart.addItem(item);
        else cart.updateByName(item.name, item);
      } catch (e) {
        window.alert(e.message);
      } finally {
        payload.name = null;
      }
    };
    return {
      cart,
      payload,
      onAddItem,
    };
  },
});
</script>
