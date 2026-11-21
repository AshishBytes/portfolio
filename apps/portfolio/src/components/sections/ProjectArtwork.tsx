import { FileSearch, Network } from "lucide-react";
import type { Project } from "../../types/content";

export function ProjectArtwork({ project }: { project: Project }) {
  if (project.image) {
    return (
      <img
        alt={`${project.title} project preview`}
        className="h-full w-full object-cover"
        height={480}
        loading="lazy"
        src={project.image}
        width={720}
      />
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
