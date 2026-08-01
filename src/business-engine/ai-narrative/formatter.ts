/**
 * Business Engine - AI Narrative Engine Formatter
 * Utilities to inject data into templates and clean up formatting.
 */

export function fillTemplate(template: string, data: Record<string, string | number>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return data[key] !== undefined ? String(data[key]) : match;
  });
}

export function formatBulletPoints(bullets: string[]): string {
  if (!bullets || bullets.length === 0) return '';
  return bullets.map(b => `• ${b}`).join('\n');
}

export function toConsultingTone(text: string): string {
  if (!text) return text;
  let refined = text.trim();
  
  // Ensure basic sentence ending
  if (!/[.!?]$/.test(refined)) {
    refined += '.';
  }
  
  // Ensure capital first letter
  return refined.charAt(0).toUpperCase() + refined.slice(1);
}

/**
 * Prepares a snippet for injection into the middle or end of a template sentence.
 * Removes trailing punctuation and lowercases the first letter unless it's an acronym.
 */
export function cleanForInjection(text: string): string {
  if (!text) return '';
  let refined = text.trim();
  
  // Remove trailing punctuation for smooth injection
  if (/[.!?]$/.test(refined)) {
    refined = refined.slice(0, -1);
  }
  
  // Lowercase first letter if it's not an acronym
  const firstWord = refined.split(' ')[0] || '';
  if (firstWord.length > 1 && firstWord === firstWord.toUpperCase()) {
    return refined;
  }
  
  return refined.charAt(0).toLowerCase() + refined.slice(1);
}
