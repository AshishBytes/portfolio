import { CodeXml, Mail, Network } from "lucide-react";
import { getProfessionalProfiles } from "@repo/config";

const icons = {
  github: CodeXml,
  linkedin: Network,
  mail: Mail,
};

interface SocialLinksProps {
  compact?: boolean;
}

export function SocialLinks({ compact = false }: SocialLinksProps) {
  return (
    <nav aria-label="Social links" className="flex items-center gap-2">
      {getProfessionalProfiles().map((social) => {
        const Icon = icons[social.icon];
        const external = social.url.startsWith("https://");
        return (
          <a
            aria-label={social.icon === "mail" ? "Email" : social.label}
            className={`inline-flex items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-accent/30 hover:text-accent ${compact ? "h-9 w-9" : "h-10 w-10"}`}
            href={social.url}
            key={social.id}
            rel={external ? "noreferrer noopener" : undefined}
            target={external ? "_blank" : undefined}
          >
            <Icon aria-hidden="true" size={compact ? 15 : 17} />
          </a>
        );
      })}
    </nav>
  );
}
