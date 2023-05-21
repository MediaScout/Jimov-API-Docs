import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <strong>JIMOV</strong>,
  project: {
    link: 'https://github.com/koikiss-dev/jimov_api',
  },
  chat: {
    link: 'https://discord.com/invite/tyZ39GCX7R',
  },
  docsRepositoryBase: 'https://github.com/koikiss-dev/jimov_api',
  footer: {
    text: 'Jimov API, Easily Access the Best Multimedia Content',
  },
  useNextSeoProps(){
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Jimov'
      }
    }
  },
  head:() => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    return(
      <>
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <meta property="og:title" content={frontMatter.title || 'Jimov'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'This project is an open-source API for retrieving multimedia content such as anime, movies and series, news, and manga in both Spanish and English.'}
        />
    </>
    )
  }
}

export default config
