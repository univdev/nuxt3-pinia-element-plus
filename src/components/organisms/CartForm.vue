<style lang="less" scoped>
  .cart-form {
    .button--add-item {
      width: 100%;
    }
  }
</style>

<template>
  <el-form
    class="cart-form"
    @submit.prevent="onSubmit"
  >
    <el-row
      :gutter="16"
    >
      <el-col
        :xl="18"
        :md="18"
        :sm="24"
      >
        <el-input
          :model-value="name"
          :placeholder="namePlaceholder"
          size="large"
          @input="onUpdateValue('name', $event)"
        />
      </el-col>
      <el-col
        :xl="6"
        :md="6"
        :sm="24"
      >
        <el-button
          class="button--add-item"
          :disabled="disabledSubmitButton"
          size="large"
          type="primary"
          native-type="submit"
        >
          {{ submitButtonText }}
        </el-button>
      </el-col>
    </el-row>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export type ChangableKeysType = 'name';

export default defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
      required: false,
      default: null
    },
    namePlaceholder: {
      type: String as PropType<string>,
      required: false,
      default: '상품명'
    },
    submitButtonText: {
      type: String as PropType<string>,
      required: false,
      default: '카트에 아이템 추가하기'
    },
    disabledSubmitButton: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false
    }
  },
  emits: [
    'submit',
    'update:name'
  ],
  setup (_, { emit }) {
    const onUpdateValue = (key: ChangableKeysType, value: any) => {
      emit(`update:${key}`, value);
    };
    const onSubmit = () => {
      emit('submit');
    };
    return {
      onUpdateValue,
      onSubmit
    };
  }
});
</script>
