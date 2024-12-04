import styles from "./index.module.css"

import Link from "next/link";
import Image from "next/image";
import {type Random} from "unsplash-js/src/methods/photos/types";
import {getRandomPhotos} from "@/db/data";

export async function PhotosList({query = ""}) {
  const photos = await getRandomPhotos(30, query);

  return <DisplayPhotos photos={photos} />
}

function DisplayPhotos({photos}: { photos: Random[] | null }) {
  if (photos === null) {
    return <div className={styles.list}>Error: Could not fetch photos</div>;
  }

  return (
    <div className={styles.list}>
      {photos.map((item) => (
        <Link key={item.id} href={`/photos/${item.id}`} style={{ cursor: "default" }}>
          <Image
            key={item.id}
            src={item.urls.regular}
            className={styles.item_img}
            alt={item.description ?? item.alt_description ?? "fallback-description of an image"}
            width={350}
            height={item.height / 15}
          />
        </Link>
      ))}
    </div>
  );
}

