import { useState, useEffect } from 'react';
import { NextUIProvider, createTheme, getDocumentTheme } from '@nextui-org/react';



const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      navColor: "hsla(0,0%,100%,0.8)",
      primary: "#ddd"
    }, // color palette object
    fonts: {}, // font families object
    shadows: {
      navShadow: "0px 5px 20px -5px rgb(2 1 1 / 10%)",
      xs: '0 2px 8px 1px rgb(104 112 118 / 0.07), 0 1px 1px -1px rgb(104 112 118 / 0.04)',
      sm: '0 2px 8px 2px rgb(104 112 118 / 0.07), 0 2px 4px -1px rgb(104 112 118 / 0.04)',
      md: '0 12px 20px 6px rgb(104 112 118 / 0.08)',
      lg: '0 12px 34px 6px rgb(104 112 118 / 0.18)',
      xl: '0 25px 65px 0px rgb(104 112 118 / 0.35)'
    }
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      navColor: "#000",
      primary: "#ddd"
    }, // color palette object
    fonts: {}, // font families object
    shadows: {
      navShadow: "0px 5px 20px -5px rgb(2 1 1 / 10%)",
      xs: '0 2px 8px 1px rgb(104 112 118 / 0.07), 0 1px 1px -1px rgb(104 112 118 / 0.04)',
      sm: '0 2px 8px 2px rgb(104 112 118 / 0.07), 0 2px 4px -1px rgb(104 112 118 / 0.04)',
      md: '0 12px 20px 6px rgb(104 112 118 / 0.08)',
      lg: '0 12px 34px 6px rgb(104 112 118 / 0.18)',
      xl: '0 25px 65px 0px rgb(104 112 118 / 0.35)'
    }
  }
})





function MyApp({ Component, pageProps }) {

  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    // you can use any storage
    let theme = window.localStorage.getItem('data-theme');
    setIsDark(theme === 'dark');

    const observer = new MutationObserver((mutation) => {
      let newTheme = getDocumentTheme(document?.documentElement);
      setIsDark(newTheme === 'dark');
    });

    // Observe the document theme changes
    observer.observe(document?.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'style']
    });

    return () => observer.disconnect();
  }, []);



  return (
    // 2. Use at the root of your app
    <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;