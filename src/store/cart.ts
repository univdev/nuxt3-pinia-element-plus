import { defineStore } from 'pinia';

export type StateType = {
  items: ItemType[];
};

export type ItemType = {
  name: string;
  price?: number;
  count?: number;
};

export const useCart = defineStore('cart', () => {
  const items: ItemType[] = reactive([]);
  const addItem = (item: ItemType) => {
    items.push(item);
  };
  const updateByName = (name: string, item: ItemType) => {
    const index = items.findIndex((i) => i.name === item.name);
    if (index <= -1) return;
    const original = items[index];
    items.splice(index, 1, { ...original, ...item, count: original.count + item.count });
  };
  return {
    items,
    addItem,
    updateByName,
  };
});