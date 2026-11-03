// Canonical host: send www.atlasges.com/* to https://atlasges.com/* with a 301,
// keeping the path and query. Everything else passes through unchanged.
// Done here because Pages _redirects cannot match on hostname. No imports.
const CANONICAL_HOST = 'atlasges.com';

export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === 'www.' + CANONICAL_HOST) {
    url.hostname = CANONICAL_HOST;
    url.protocol = 'https:';
    url.port = '';
    return new Response(null, { status: 301, headers: { location: url.toString(), 'cache-control': 'public, max-age=3600' } });
  }
  return context.next();
}
