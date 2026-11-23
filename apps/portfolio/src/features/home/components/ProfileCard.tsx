import { Camera } from "lucide-react";
import { motion } from "motion/react";
import { profile } from "../../../content/profile";

export function ProfileCard() {
  return (
    <motion.figure
      className="relative m-0 aspect-square h-auto min-h-0 overflow-hidden rounded-card border border-line bg-surface shadow-card lg:aspect-auto lg:h-full lg:min-h-0"
      initial={false}
      whileHover={{ scale: 1.005 }}
      transition={{ duration: 0.2 }}
    >
      <img
        alt={profile.name}
        className="absolute inset-0 h-full w-full object-cover object-[center_28%]"
        decoding="async"
        fetchPriority="high"
        height={400}
        src={profile.image}
        width={400}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/5"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-2 rounded-[1rem] border border-white/45 shadow-[0_2px_10px_rgba(0,0,0,0.24),inset_0_0_0_1px_rgba(255,255,255,0.12)]"
      />
      <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-xl border border-white/15 bg-black/40 px-3 py-2.5 text-white backdrop-blur-md sm:inset-x-5 sm:bottom-5">
        <span className="text-xs font-medium tracking-wide">
          {profile.name}
        </span>
        <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.14em] text-white/75">
          <Camera aria-hidden="true" size={13} /> Portrait
        </span>
      </figcaption>
    </motion.figure>
  );
}
