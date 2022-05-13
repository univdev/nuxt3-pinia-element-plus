<style lang="less" scoped>

</style>

<template>
  <el-table
    class="cart-list"
    :data="items"
  >
    <el-table-column
      prop="name"
      label="이름"
    ></el-table-column>
    <el-table-column
      prop="price"
      label="가격"
    ></el-table-column>
    <el-table-column
      prop="count"
      label="갯수"
    ></el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ItemType } from '~~/src/store/cart';

export default defineComponent({
  props: {
    items: {
      type: Array as PropType<ItemType[]>,
      required: false,
      default: () => [],
    },
  },
  setup() {
    const numberFilter = useNumberFilter;
    return {
      numberFilter,
    };
  },
});
</script>
