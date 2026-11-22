import { ArrowUpRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "../../../content/articles";
import { siteConfig, getArticleUrl } from "../../../app/config";
import { Card } from "../../../components/ui/Card";
import { SectionHeading } from "../../../components/ui/SectionHeading";
import { ArticleCard } from "../../../components/cards/ArticleCard";
import { formatDate } from "../../../lib/dates";

export function ArticlesSection() {
  const featuredArticle = articles[0];
  const featuredUrl = featuredArticle
    ? getArticleUrl(featuredArticle.slug)
    : undefined;

  return (
    <section aria-labelledby="articles-title" className="py-12 sm:py-16">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Notes & ideas"
          title="Articles"
          description="A few selected ideas on software, product, and engineering."
        />
        <Link
          className="inline-flex w-fit items-center gap-2 pb-1 text-sm font-semibold text-ink hover:text-accent"
          to="/blog"
        >
          All writing <ArrowUpRight aria-hidden="true" size={16} />
        </Link>
      </div>
      <div className="mt-7 grid gap-4 lg:grid-cols-2">
        {featuredArticle && (
          <Card className="flex flex-col justify-between bg-ink text-page lg:row-span-2">
            <div>
              <div className="inline-flex items-center gap-2 text-accent">
                <FileText
                  aria-hidden="true"
                  className="text-accent-on-ink"
                  size={16}
                />
                <p className="eyebrow text-accent-on-ink">Featured writing</p>
              </div>
              <h3 className="display-heading mt-5 text-3xl leading-tight sm:text-4xl">
                {featuredArticle.title}
              </h3>
              <p className="mt-4 max-w-lg text-sm leading-7 text-page/75">
                {featuredArticle.excerpt}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-page/15 pt-4 text-xs text-page/65">
              <span>
                {formatDate(featuredArticle.publishedAt)} ·{" "}
                {featuredArticle.readingTime}
              </span>
              {featuredUrl ? (
                <a
                  className="inline-flex items-center gap-1.5 font-semibold text-page hover:text-accent"
                  href={featuredUrl}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Read on the blog <ArrowUpRight aria-hidden="true" size={14} />
                </a>
              ) : null}
            </div>
          </Card>
        )}
        {articles.slice(1, 4).map((article) => (
          <ArticleCard article={article} key={article.slug} />
        ))}
      </div>
      {!siteConfig.blogOrigin && (
        <p className="mt-4 text-xs text-subtle">
          Selected writing on software, product, and engineering.
        </p>
      )}
    </section>
  );
}
