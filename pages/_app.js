import { useEffect } from 'react';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const liffId = process.env.NEXT_PUBLIC_LIFF_ID

function MyApp({ Component, pageProps }) {

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async() => {

    const liff = (await import('@line/liff')).default

    try{
      await liff.init({liffId})
      console.log("initial success")
    }catch(error){
      console.error('liff error', error.message)
    }

  })

  return <Component {...pageProps} />
}

export default MyApp