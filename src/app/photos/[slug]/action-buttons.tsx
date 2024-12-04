"use client";

import { useCollectionStore } from "@/stores/collection-store-provider";

export function ActionButtons({ id, url }: { id: string; url: string }) {
  const { add, items, remove } = useCollectionStore((state) => state);

  const itemExists = items.find((item) => item.id === id);

  return (
    <>
      <button
        className="mt-1"
        onClick={() => add({ id, url })}
        style={{
          cursor: !!itemExists ? "not-allowed" : "pointer",
          backgroundColor: !!itemExists ? "#ccc" : "#000",
        }}
        disabled={!!itemExists}
      >
        save
      </button>
      <button
        className="mt-1"
        onClick={() => remove(id)}
        style={{
          cursor: !itemExists ? "not-allowed" : "pointer",
          backgroundColor: !itemExists ? "#ccc" : "#000",
        }}
        disabled={!itemExists}
      >
        remove
      </button>
    </>
  );
}
