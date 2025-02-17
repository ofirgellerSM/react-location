import React from 'react'
import '@docsearch/react/dist/style.css'
import '../styles/index.css'
import Head from 'next/head'
import { SearchProvider } from 'components/useSearch'

function loadScript(src, attrs = {}) {
  if (typeof document !== 'undefined') {
    const script = document.createElement('script')
    script.async = true
    script.defer = true
    Object.keys(attrs).forEach((attr) => script.setAttribute(attr, attrs[attr]))
    script.src = src
    document.body.appendChild(script)
  }
}

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    loadScript('https://buttons.github.io/buttons.js')
    // Convert kit slide up form
    loadScript('https://tanstack.ck.page/ec931f3f3d/index.js', {
      'data-uid': 'ec931f3f3d',
    })
  }, [])

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
        @media (max-width: 390px) {
            .formkit-slide-in {
              display: none;
            }
          }
          @media (max-height: 740px) {
            .formkit-slide-in {
              display: none;
            }
          }
          `,
          }}
        />
      </Head>
      <img src="https://static.scarf.sh/a.png?x-pxid=c26c2c2e-bc50-4e9e-9909-aeaba8968d45" />
      <SearchProvider>
        <Component {...pageProps} />
      </SearchProvider>
    </>
  )
}

export default MyApp
