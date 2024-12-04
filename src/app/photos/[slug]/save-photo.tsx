"use client";

import {useCollectionStore} from "@/stores/collection-store-provider";

export function SavePhoto({id, url}: {id: string, url: string}) {
  const { add, items, remove } = useCollectionStore(
    (state) => state,
  )

  const itemExists = items.find((item) => item.id === id)


  return (
    <>
      <button disabled={!!itemExists} style={{marginTop: "1rem", cursor: !!itemExists ? "not-allowed" : "pointer", backgroundColor: !!itemExists ? "#ccc" : "#000"}} onClick={() => add({id, url})}>save</button>
      <button disabled={!itemExists} style={{marginTop: "1rem", cursor: !itemExists ? "not-allowed" : "pointer", backgroundColor: !itemExists ? "#ccc" : "#000"}} onClick={() => remove(id)}>remove</button>
    </>
  )
}