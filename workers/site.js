/**
 * Worker entry for Astro static output in ./dist.
 * IMPORTANT: Always fetch assets via https://assets.local — never the request
 * hostname — or Cloudflare returns HTTP 522 on custom domains.
 *
 * Canonical host is apex (no www). Always 301 www → apex so crawlers never
 * see duplicate content or mismatched canonical/hreflang on www.
 */
function assetsFetch(env, request, pathname) {
  return env.ASSETS.fetch(new Request(new URL(pathname, 'https://assets.local'), request))
}

function withHtmlCharset(response) {
  const contentType = response.headers.get('content-type') || ''
  const primary = contentType.split(',')[0].trim()
  if (!primary.toLowerCase().startsWith('text/html')) return response
  if (/charset=/i.test(primary)) {
    if (contentType.includes(',')) {
      const headers = new Headers(response.headers)
      headers.set('content-type', primary)
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      })
    }
    return response
  }
  const headers = new Headers(response.headers)
  headers.set('content-type', 'text/html; charset=utf-8')
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  })
}

/** Prefer apex: https://www.example.com/path → https://example.com/path */
function toApexUrl(url) {
  const host = url.hostname.toLowerCase()
  if (!host.startsWith('www.')) return null
  const next = new URL(url.toString())
  next.hostname = host.slice(4)
  next.protocol = 'https:'
  return next
}

function isXmlCrawler(request) {
  const ua = request.headers.get('user-agent') || ''
  return /googlebot|google-inspectiontool|bingbot|slurp|duckduckbot|yandex|baiduspider|facebookexternalhit|twitterbot|linkedinbot|applebot/i.test(
    ua,
  )
}

async function serveSitemap(env, request) {
  const asset = await env.ASSETS.fetch(
    new Request(new URL('/sitemap.xml', 'https://assets.local'), {
      method: 'GET',
      headers: request.headers,
    }),
  )
  let body = await asset.text()
  if (!asset.ok || !body.includes('<urlset')) {
    return new Response('Sitemap unavailable', { status: 500, headers: { 'content-type': 'text/plain; charset=utf-8' } })
  }
  if (!isXmlCrawler(request) && !body.includes('xml-stylesheet')) {
    body = body.replace(
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/css" href="/sitemap.css"?>',
    )
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

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.protocol === 'http:') {
      url.protocol = 'https:'
      const apex = toApexUrl(url)
      return Response.redirect((apex || url).toString(), 301)
    }

    const apex = toApexUrl(url)
    if (apex) {
      return Response.redirect(apex.toString(), 301)
    }

    if (url.pathname === '/sitemap.xml') {
      return serveSitemap(env, request)
    }

    const assetResponse = await assetsFetch(env, request, url.pathname + url.search)
    const response = withHtmlCharset(assetResponse)

    // Help crawlers + Seobility: advertise preferred host + self-canonical
    const headers = new Headers(response.headers)
    if (!headers.has('Strict-Transport-Security')) {
      headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
    }
    const contentType = headers.get('content-type') || ''
    if (contentType.includes('text/html')) {
      const canonical = `https://${url.hostname}${url.pathname === '/' ? '/' : url.pathname.replace(/\/$/, '') || '/'}`
      const existing = headers.get('Link')
      const linkCanonical = `<${canonical}>; rel="canonical"`
      headers.set('Link', existing ? `${existing}, ${linkCanonical}` : linkCanonical)
    }
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    })
  },
}
