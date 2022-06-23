import ThemeJacket from '../styles/base';


export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeJacket>
        <Component {...pageProps} />
      </ThemeJacket>
    </>
  );
}