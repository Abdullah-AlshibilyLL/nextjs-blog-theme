import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';

import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-5CWTVQ2'
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <span className="theme-bejamas" />
      <Component {...pageProps} />
    </>
  );
}


export default class MyApp extends App {
  componentDidMount() {
    TagManager.initialize(tagManagerArgs);
  }
};