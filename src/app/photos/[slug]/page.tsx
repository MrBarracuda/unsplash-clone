import styles from "./index.module.css";

import { api } from "@/lib/utils";
import Image from "next/image";
import { ActionButtons } from "@/app/photos/[slug]/action-buttons";

export default async function Photo({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const photo = await api.photos.get({ photoId: slug });

  if (photo.status !== 200 || !photo.response) {
    return <div>Error: could not fetch photo</div>;
  }

  return (
    <div className={styles.container}>
      <Image
        src={photo.response?.urls.full}
        alt="img"
        width={700}
        height={700}
      />
      <div>
        <ul className={styles.photo_text}>
          <li>Author: {photo.response.user.bio}</li>
          <li>Description: {photo.response.description}</li>
        </ul>
        <ActionButtons id={photo.response.id} url={photo.response.urls.full} />
      </div>
    </div>
  );
}
