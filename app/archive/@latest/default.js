import { getLatestNews } from "@/lib/news";
import NewsList from "@/components/news-list";

export default function LatestNewPage() {
  const latestNews = getLatestNews();

  return (
    <>
      <h2>Latest news</h2>
      <NewsList news={latestNews} />
    </>
  );
}
