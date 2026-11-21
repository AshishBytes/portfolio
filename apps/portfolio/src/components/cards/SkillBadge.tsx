import { Badge } from "../ui/Badge";

export function SkillBadge({ skill }: { skill: string }) {
  return <Badge className="px-3 py-1.5 text-sm">{skill}</Badge>;
}
