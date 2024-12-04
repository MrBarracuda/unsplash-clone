"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import {
  type CollectionStore,
  createCollectionStore,
} from "@/stores/collection-store";

export type CollectionStoreApi = ReturnType<typeof createCollectionStore>;

export const CollectionStoreContext = createContext<
  CollectionStoreApi | undefined
>(undefined);

export interface CollectionStoreProviderProps {
  children: ReactNode;
}

export const CollectionStoreProvider = ({
  children,
}: CollectionStoreProviderProps) => {
  const storeRef = useRef<CollectionStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createCollectionStore();
  }

  return (
    <CollectionStoreContext.Provider value={storeRef.current}>
      {children}
    </CollectionStoreContext.Provider>
  );
};

export const useCollectionStore = <T,>(
  selector: (store: CollectionStore) => T,
): T => {
  const collectionStoreContext = useContext(CollectionStoreContext);

  if (!collectionStoreContext) {
    throw new Error(
      `useCollectionStore must be used within CollectionStoreProvider`,
    );
  }

  return useStore(collectionStoreContext, selector);
};
