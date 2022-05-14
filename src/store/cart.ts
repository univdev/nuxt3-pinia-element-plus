import { defineStore } from 'pinia';

export type ItemType = {
  name: string;
  price?: number;
  count?: number;
};

export type StateType = {
  items: ItemType[];
};

export const useCart = defineStore('cart', () => {
  const items: ItemType[] = reactive([]);
  /**
   * items 배열에 item을 추가합니다.
   * @param item
   */
  const addItem = (item: ItemType) => {
    items.push(item);
  };
  /**
   * items 배열에 들어있는 item을 name을 기준으로 변경합니다.
   * count 프로퍼티는 예외적으로 기존 값에 추가됩니다.
   * @param name
   * @param item
   * @returns
   */
  const updateByName = (name: string, item: ItemType) => {
    const index = items.findIndex(i => i.name === name);
    if (index <= -1) {
      return;
    }
    const original = items[index];
    items.splice(index, 1, { ...original, ...item, count: original.count + item.count });
  };
  return {
    items,
    addItem,
    updateByName
  };
});
