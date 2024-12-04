// import { create } from "zustand";
// import { persist } from "zustand/middleware";
//
// type Photo = {
//   id: number;
//   url: string;
// };
//
// // interface CollectionState {
// //   collectionItems: Photo[];
// //   add: (item: Photo) => void;
// //   remove: (productId: number) => void;
// // }
//
// export const useCollectionStore = create(
//   persist<CollectionState>(
//     (set, get) => ({
//       collectionItems: [],
//
//       add: (item) => {
//         const itemExists = get().collectionItems.find(
//           (collectionItem) => collectionItem.id === item.id,
//         );
//
//         if (itemExists) {
//           // if (typeof itemExists.quantity === "number") {
//           //   itemExists.quantity++;
//           // }
//
//           set({ collectionItems: [...get().collectionItems] });
//         } else {
//           set({ collectionItems: [...get().collectionItems, { ...item, quantity: 1 }] });
//         }
//       },
//       remove: (productId) => {
//         const itemExists = get().collectionItems.find(
//           (collectionItem) => collectionItem.id === productId,
//         );
//
//         // set({ collectionItems: updatedCartItems });
//
//         if (itemExists) {
//           if (typeof itemExists) {
//             const updatedCartItems = get().collectionItems.filter(
//               (item) => item.id !== productId,
//             );
//             set({ collectionItems: updatedCartItems });
//           }
//         }
//       },
//     }),
//     {
//       name: "collection-items",
//     },
//   ),
// );

import { createStore } from 'zustand/vanilla'

export type CollectionState = {
  id: string;
  url: string;
}

export type CollectionActions = {
  add: (item: CollectionState) => void
  remove: (id: string) => void
  removeAll: () => void
}

export type CollectionStore = {
  items: CollectionState[];
} & CollectionActions;
export const defaultInitState: CollectionState[] = []


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
    removeAll: () => set({items: []}),
  }));
};
