"use client";

import styles from "../index.module.css";

import Link from "next/link";
import Image from "next/image";
import { useCollectionStore } from "@/stores/collection-store-provider";

export default function Collection() {
  const { items, removeAll } = useCollectionStore((state) => state);

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <button onClick={() => removeAll()}>remove all</button>
      </div>
      <div className={styles.list}>
        {items.map((item) => (
          <Link
            key={item.id}
            href={`/photos/${item.id}`}
          >
            <Image
              key={item.id}
              src={item.url}
              className={styles.item_img}
              alt={"fallback-description of an image"}
              width={300}
              height={300}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
