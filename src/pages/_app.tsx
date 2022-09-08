
import { AppProps} from "../../node_modules/next/app"
import { Header } from "../components/Header/index";
import { SessionProvider } from 'next-auth/react'

import '../styles/global.scss';

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
   return ( 
   <SessionProvider session={session}>
      <Header/>
      <Component {...pageProps} />
   </SessionProvider>
   )
}

export default MyApp
