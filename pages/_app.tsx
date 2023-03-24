import Layout from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import LoginModel from '@/components/models/LoginModel'
import RegisterModel from '@/components/models/RegisterModel'
// import Model from '@/components/Model';

export default function App({ Component, pageProps }: AppProps) {
 return(
            <> 
                  {/* <Model actionLabel='Submit' isOpen title="Test Model"/>    */}
                  <RegisterModel/>
                  <LoginModel/>
                  <Layout>
                        <Component {...pageProps} /> 
                  </Layout>
            </>
      )
}
