import styles from "./index.module.css";

import {api} from "@/lib/utils";
import Image from "next/image";
import {SavePhoto} from "@/app/photos/[slug]/save-photo";

export default async function Photo({
                                params,
                              }: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const photo = await api.photos.get({photoId: slug});

  if (photo.status !== 200 || !photo.response) {
    return <div>Error: could not fetch photo</div>;
  }

  return (
    <div className={styles.container}>
      <Image src={photo.response?.urls.full} alt="img" width={700} height={700} />
      <div>
        <ul style={{listStyle: "none", fontSize: "1.4rem", fontWeight: "lighter"}}>
          <li style={{marginBottom: "1rem"}}>Author: {photo.response.user.bio}</li>
          <li>Description: {photo.response.description}</li>
        </ul>
        <SavePhoto id={photo.response.id} url={photo.response.urls.full} />
      </div>
    </div>
  );
}



