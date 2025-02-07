import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";
import Link from "next/link";
import NewsList from "@/components/news-list";

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;

  const selectedYear = filter?.[0];

  let news;

  if (selectedYear) {
    news = getNewsForYear(selectedYear);
  }

  let newsContent = <p>No news for the selected period.</p>;

  const links = getAvailableNewsYears();

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      <header id={"archive-header"}>
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link}>
                <Link href={`/archive/${link}`}>{link}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
