import type { Copy, Locale } from './types';
import { en } from './en';
import { zh } from './zh';

export type { Copy, Locale };

const copyByLocale: Record<Locale, Copy> = { en, zh };

export function getCopy(locale: Locale): Copy {
  return copyByLocale[locale];
}

/** Compute the URL for a given locale of the same page.
 *  Used by the language toggle to swap locales while staying on the same page. */
export function alternateHref(currentPath: string, target: Locale): string {
  // EN paths are bare ("/", "/features"); ZH paths are "/zh", "/zh/features".
  const stripped = currentPath.replace(/^\/zh\/?/, '/').replace(/\/$/, '') || '/';
  if (target === 'en') return stripped;
  if (stripped === '/') return '/zh';
  return `/zh${stripped}`;
}
