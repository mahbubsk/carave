import { useState, useEffect } from 'react';
import { NextUIProvider } from '@nextui-org/react';





function MyApp({ Component, pageProps }) {

  const [isLoading, setIsLoading] = useState(true);
  const loadingMessage = <p>contents is loading hold for a sec...</p>;
  useEffect(() => {
    setTimeout(() => {
      console.log(isLoading)
    }, 3000)
  }, [isLoading])


  return (
    // 2. Use at the root of your app
    <NextUIProvider >
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;