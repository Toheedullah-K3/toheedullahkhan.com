import Script from 'next/script'

export default function UmamiAnalytics() {
  const umamiSrc = process.env.NEXT_PUBLIC_UMAMI_SRC
  const umamiId = process.env.NEXT_PUBLIC_UMAMI_ID

  if (!umamiSrc || !umamiId) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Umami Analytics is not configured. Set NEXT_PUBLIC_UMAMI_SRC and NEXT_PUBLIC_UMAMI_ID to enable it.')
    }
    return null
  }

  return (
    <Script
      id="umami-analytics"
      src={umamiSrc}
      data-website-id={umamiId}
      strategy="afterInteractive"
      async
    />
  )
}