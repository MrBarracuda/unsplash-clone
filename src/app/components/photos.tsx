import styles from "@/app/index.module.css";

import {getPhotosByQuery, getRandomPhotos} from "@/app/db/data";
import Link from "next/link";
import Image from "next/image";
import {type Random} from "unsplash-js/src/methods/photos/types";

export async function SearchResults({query}: {query: string}) {
  const photos = await getPhotosByQuery(query)
  return <DisplayPhotos photos={photos} />
}

export async function PhotosList() {
  const photos = await getRandomPhotos();
  return <DisplayPhotos photos={photos} />
}


function DisplayPhotos({photos}: { photos: Random[] | null }) {
  if (photos === null) {
    return <div>Error: Could not fetch photos</div>;
  }

  return (
    <div className={styles.list}>
      {photos.map((item) => (
        <Link key={item.id} href={`/photos/${item.id}`} style={{ cursor: "default" }}>
          <Image
            key={item.id}
            src={item.urls.regular}
            className={styles.item_img}
            alt="unsplash-img"
            width={400}
            height={item.height / 12}
          />
        </Link>
      ))}
    </div>
  );
}

