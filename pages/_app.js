import {IBM_Plex_Sans } from 'next/font/google'
import '@/styles/globals.css'

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${ibmPlexSans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
