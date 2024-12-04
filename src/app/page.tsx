import styles from "./index.module.css";
import {Navbar} from "@/app/_components/search-bar";
import {PhotosList} from "@/app/_components/photos";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query ?? "";

  return (
      <div className={styles.container}>
        <Navbar query={query} />
        <PhotosList query={query} />
      </div>
  );
}

