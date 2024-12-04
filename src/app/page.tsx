import styles from "./index.module.css";
import {Navbar} from "@/app/components/search-bar";
import {PhotosList} from "@/app/components/photos";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query ?? "";

  return (
    <main className={styles.main}>
      <div className={styles.container}>
      <Navbar query={query} />
        <PhotosList query={query} />
      </div>
    </main>
  );
}

