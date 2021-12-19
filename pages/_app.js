import { AppWrapper } from '../context/state';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';

function MyGame({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  )
}

export default MyGame
