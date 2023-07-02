import { AppProps } from 'next/app';
import '../styles/global.scss';
import { useContext } from "react";
import { NavProvider} from "../utils/UserContext";
const App = ({ Component, pageProps }: AppProps) => {
  // Customizations and global configurations
  return (
    <NavProvider>
        <Component {...pageProps} />
    </NavProvider>
  )
};

export default App;
