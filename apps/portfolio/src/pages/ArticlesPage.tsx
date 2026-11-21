import { articles } from "../content/articles";
import { ArticleCard } from "../components/cards/ArticleCard";
import { PageHeader } from "../components/sections/PageHeader";
import { Container } from "../components/ui/Container";
import { siteConfig } from "../app/config";

export function ArticlesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Writing"
        title="Article previews."
        description="Selected writing previews across software, product, and engineering."
      />
      <Container className="pb-12">
        <section
          aria-labelledby="article-list-title"
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          <h2 className="sr-only" id="article-list-title">
            Article preview list
          </h2>
          {articles.map((article) => (
            <ArticleCard article={article} key={article.slug} />
          ))}
        </section>
        {siteConfig.blogOrigin && (
          <p className="mt-5 text-sm text-muted">
            Full articles are available at{" "}
            <a
              className="font-semibold text-ink underline decoration-line underline-offset-4 hover:text-accent"
              href={siteConfig.blogOrigin}
              rel="noreferrer noopener"
              target="_blank"
            >
              the blog <span className="sr-only">(opens in a new tab)</span>
            </a>
            .
          </p>
        )}
      </Container>
    </>
  );
}
