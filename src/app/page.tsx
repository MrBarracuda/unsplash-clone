import styles from "./index.module.css";
import {SearchBar} from "@/app/components/search-bar";
import {PhotosList, SearchResults} from "@/app/components/photos";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query ?? "";

  return (
    <main className={styles.main}>
      <SearchBar query={query} />
      {query ? <SearchResults query={query} /> : <PhotosList /> }
    </main>
  );
}

