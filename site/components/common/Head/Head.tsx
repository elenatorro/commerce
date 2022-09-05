import type { VFC } from 'react'
import { SEO } from '@components/common'

const Head: VFC = () => {
  return (
    <SEO>
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
      <script src="https://middleware-dusky.vercel.app/index.js" data-proxy="https://middleware-dusky.vercel.app"></script>
    </SEO>
  )
}

export default Head