import { createStore } from "zustand/vanilla";

export type CollectionState = {
  id: string;
  url: string;
};

export type CollectionActions = {
  add: (item: CollectionState) => void;
  remove: (id: string) => void;
  removeAll: () => void;
};

export type CollectionStore = {
  items: CollectionState[];
} & CollectionActions;
export const defaultInitState: CollectionState[] = [];

export const createCollectionStore = (
  initState: CollectionState[] = defaultInitState,
) => {
  return createStore<CollectionStore>()((set) => ({
    items: initState,
    add: (item) =>
      set((state) => ({
        items: [...state.items, item],
      })),
    remove: (id) =>
      set((state) => ({
        items: state.items.filter((item) => item.id !== id),
      })),
    removeAll: () => set({ items: [] }),
  }));
};
