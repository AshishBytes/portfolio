import { ArrowUpRight, Clock3 } from "lucide-react";
import type { ArticlePreview } from "../../types/content";
import { getArticleUrl } from "../../app/config";
import { formatDate } from "../../lib/dates";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";

interface ArticleCardProps {
  article: ArticlePreview;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const articleUrl = getArticleUrl(article.slug);
  const articleDate = formatDate(article.publishedAt);

  return (
    <Card className="flex h-full flex-col">
      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-ink">
        {article.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-muted">
        {article.excerpt}
      </p>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4 text-xs text-subtle">
        <time dateTime={article.publishedAt}>{articleDate}</time>
        <span className="inline-flex items-center gap-1.5">
          <Clock3 aria-hidden="true" size={13} />
          {article.readingTime}
        </span>
      </div>
      <div className="mt-4">
        {articleUrl ? (
          <a
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-accent"
            href={articleUrl}
            rel="noreferrer noopener"
            target="_blank"
          >
            Read on the blog <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        ) : null}
      </div>
    </Card>
  );
}
