<style lang="less" scoped>
  .cart-list {
    .cart-form {
      margin-top: 8px;
    }
  }
</style>

<template>
  <el-row
    class="cart-list"
    justify="center"
  >
    <el-col
      :span="18"
    >
      <organism-cart-list
        :items="items"
      />
    </el-col>
    <el-col
      :span="18"
    >
      <organism-cart-form
        class="cart-form"
        :name="name"
        :disabled-submit-button="isDisabledAddItemButton"
        @submit="onAddCartItem"
        @update:name="onUpdateValue('name', $event)"
      />
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ItemType } from '~~/src/store/cart';

export type ChangableKeysType = 'name';

export default defineComponent({
  name: 'TemplateCartList',
  props: {
    items: {
      type: Array as PropType<ItemType[]>,
      required: false,
      default: () => []
    },
    name: {
      type: String as PropType<string>,
      required: false,
      default: null
    }
  },
  emits: [
    'update:name',
    'add:cart-item'
  ],
  setup (props, { emit }) {
    const onAddCartItem = () => {
      emit('add:cart-item');
    };
    const onUpdateValue = (key: ChangableKeysType, value: string) => {
      emit(`update:${key}`, value);
    };
    const isDisabledAddItemButton = computed(() => !props.name);
    return {
      isDisabledAddItemButton,
      onAddCartItem,
      onUpdateValue
    };
  }
});
</script>
