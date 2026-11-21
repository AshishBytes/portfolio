export function formatDate(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
