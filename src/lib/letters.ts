// Splits text into per-character tokens for the rainbow per-letter hover
// treatment: a plain char for letters, or a marker object for whitespace
// (rendered as its own space so layout/flex containers don't collapse it).
export type LetterToken = string | { space: true };

export function letters(text: string): LetterToken[] {
  return [...text].map((ch) => (ch.trim() ? ch : { space: true }));
}
