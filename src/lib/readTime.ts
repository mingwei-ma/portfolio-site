// Rough reading-time estimate from raw markdown, ~200 words/minute.
export function readTime(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export const categoryLabel: Record<'tl' | 'll', string> = {
  tl: 'Thought leadership',
  ll: 'Lessons learned',
};
