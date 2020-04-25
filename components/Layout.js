import Navigation from './Navigation'
import Head from 'next/head'

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>frekans7'nin web sayfasi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <Navigation /> */}
      <main>{children}</main>
      {/* <footer>design by oneTux1</footer> */}
    </div>
  )
}
export default Layout
