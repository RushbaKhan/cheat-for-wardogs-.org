/**
 * Serve /sitemap.xml as XML even when the static-asset pipeline 500s.
 * Used on Cloudflare Pages; Workers use workers/site.js instead.
 */
export async function onRequestGet({ request, env }) {
  const asset = await env.ASSETS.fetch(
    new Request(new URL('/sitemap.xml', 'https://assets.local'), request),
  )
  const body = await asset.text()
  if (!asset.ok || !body.includes('<urlset')) {
    return new Response('Sitemap unavailable', {
      status: 500,
      headers: { 'content-type': 'text/plain; charset=utf-8' },
    })
  }
  return new Response(body, {
    status: 200,
    headers: {
      'content-type': 'application/xml; charset=utf-8',
      'x-content-type-options': 'nosniff',
      'cache-control': 'public, max-age=3600',
      'access-control-allow-origin': '*',
    },
  })
}
