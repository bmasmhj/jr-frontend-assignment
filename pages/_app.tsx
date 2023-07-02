import { AppProps } from 'next/app';
import '../styles/global.scss';
const App = ({ Component, pageProps }: AppProps) => {
  // Customizations and global configurations
  return (
        <Component {...pageProps} />
  )
};

export default App;
