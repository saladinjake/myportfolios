import ThemeJacket from '../styles/base';

import "./style.css"
export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeJacket>
        <Component {...pageProps} />
      </ThemeJacket>
    </>
  );
}