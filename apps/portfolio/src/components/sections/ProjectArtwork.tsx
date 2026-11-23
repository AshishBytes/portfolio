import { FileSearch, Network } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../../types/content";

export function ProjectArtwork({ project, context = "card" }: { project: Project; context?: "card" | "detail" }) {
  if (project.image) {
    const imageElement = (
      <img
        alt={`${project.title} project preview`}
        className="h-full w-full object-cover transition-transform duration-300 ease-out"
        height={480}
        loading="lazy"
        src={project.image}
        width={720}
      />
    );

    // On detail page with GitHub URL, show "View Source Code"
    if (context === "detail" && project.githubUrl) {
      return (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block overflow-hidden rounded-t-[inherit]"
          aria-label={`View ${project.title} source code on GitHub`}
        >
          <div className="relative overflow-hidden rounded-t-[inherit]">
            {imageElement}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-2 py-6 text-white transition-transform duration-300 group-hover:translate-y-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m18 13 6 6-6 6" />
                <path d="m6 5-6 6 6 6" />
                <path d="m14.5 4-5 16" />
              </svg>
              <span className="font-semibold">View Source Code</span>
            </div>
          </div>
        </a>
      );
    }

    // On detail page without GitHub, just show image
    if (context === "detail") {
      return imageElement;
    }

    // On card, link to project detail page
    return (
      <Link
        to={`/projects/${project.slug}`}
        className="group relative block overflow-hidden rounded-t-[inherit]"
        aria-label={`View ${project.title} project details`}
      >
        <div className="relative overflow-hidden rounded-t-[inherit]">
          {imageElement}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-2 py-6 text-white transition-transform duration-300 group-hover:translate-y-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span className="font-semibold">View Project</span>
          </div>
        </div>
      </Link>
    );
  }

  if (project.slug === "docqa-tutor") {
    return (
      <div
        aria-hidden="true"
        className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-t-[inherit] bg-[#f3e9df] p-6"
      >
        <div className="absolute -right-8 -top-12 h-44 w-44 rounded-full border border-[#d8c3b0]/60" />
        <div className="absolute -right-3 -top-7 h-32 w-32 rounded-full border border-[#d8c3b0]/50" />
        <div className="relative w-full max-w-[19rem] rounded-2xl border border-[#e2d4c7] bg-[#fffdf9] p-4 shadow-[0_10px_28px_rgba(86,55,29,0.10)] sm:p-5">
          <div className="flex items-center gap-2 text-[#875b3b]">
            <FileSearch size={18} strokeWidth={1.7} />
            <span className="text-xs font-semibold uppercase tracking-[0.14em]">
              Document query
            </span>
          </div>
          <div className="mt-4 h-2 w-4/5 rounded-full bg-[#eaded2]" />
          <div className="mt-2 h-2 w-3/5 rounded-full bg-[#f0e8e0]" />
          <div className="mt-5 rounded-xl bg-[#f7f1eb] px-3 py-3 text-xs leading-5 text-[#655347]">
            Find the key ideas across a long document.
          </div>
        </div>
        <span className="absolute bottom-5 left-6 rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold tracking-[0.12em] text-[#875b3b]">
          QA / NLP
        </span>
      </div>
    );
  }

  if (project.slug === "reef-platform") {
    return (
      <div
        aria-hidden="true"
        className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-t-[inherit] bg-[#e7ecf3] p-6"
      >
        <div className="absolute -bottom-16 -left-14 h-52 w-52 rounded-full border border-[#b8c5d9]/70" />
        <div className="absolute -bottom-9 -left-7 h-36 w-36 rounded-full border border-[#b8c5d9]/60" />
        <div className="relative w-full max-w-[19rem] rounded-2xl border border-[#d4dce8] bg-[#fafcfd] p-4 shadow-[0_10px_28px_rgba(49,61,82,0.10)] sm:p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#4f5d73]">
              Gateway shard sync
            </span>
            <Network
              aria-hidden="true"
              className="text-[#5f7391]"
              size={18}
              strokeWidth={1.7}
            />
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-3 rounded-lg bg-[#eff3f8] px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-[#7a91b3]" />
              <span className="h-2 flex-1 rounded-full bg-[#d1dbe8]" />
              <span className="h-2 w-8 rounded-full bg-[#d1dbe8]" />
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-[#eff3f8] px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-[#7a91b3]" />
              <span className="h-2 w-3/5 rounded-full bg-[#d1dbe8]" />
              <span className="h-2 w-8 rounded-full bg-[#d1dbe8]" />
            </div>
          </div>
        </div>
        <span className="absolute bottom-5 right-6 rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold tracking-[0.12em] text-[#4f5d73]">
          DISCORD VERIFIED
        </span>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-t-[inherit] bg-[#e9ece7] p-6"
    >
      <div className="absolute -bottom-16 -left-14 h-52 w-52 rounded-full border border-[#bfc8bb]/70" />
      <div className="absolute -bottom-9 -left-7 h-36 w-36 rounded-full border border-[#bfc8bb]/60" />
      <div className="relative w-full max-w-[19rem] rounded-2xl border border-[#d9dfd4] bg-[#fcfdfa] p-4 shadow-[0_10px_28px_rgba(54,66,49,0.10)] sm:p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#53644f]">
            Ledger sync
          </span>
          <Network
            aria-hidden="true"
            className="text-[#657b5f]"
            size={18}
            strokeWidth={1.7}
          />
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-3 rounded-lg bg-[#f2f5ef] px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-[#8ea183]" />
            <span className="h-2 flex-1 rounded-full bg-[#d7dfd1]" />
            <span className="h-2 w-8 rounded-full bg-[#d7dfd1]" />
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-[#f2f5ef] px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-[#8ea183]" />
            <span className="h-2 w-3/5 rounded-full bg-[#d7dfd1]" />
            <span className="h-2 w-8 rounded-full bg-[#d7dfd1]" />
          </div>
        </div>
      </div>
      <span className="absolute bottom-5 right-6 rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold tracking-[0.12em] text-[#53644f]">
        OFFLINE FIRST
      </span>
    </div>
  );
}
