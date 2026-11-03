import { CARD_LINKS } from './card-links.generated';

/** Detail URL for a capability card, matched by its EN heading. Undefined when no detail content exists yet. */
export function detailHref(serviceSlug: string, heading: string): string | undefined {
  const slug = CARD_LINKS[serviceSlug]?.[heading];
  return slug ? `/services/${serviceSlug}/${slug}/` : undefined;
}
