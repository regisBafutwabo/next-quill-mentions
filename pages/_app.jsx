import '../styles/globals.css';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import 'quill-mention/dist/quill.mention.css';
import 'quill-emoji/dist/quill-emoji.css';

import React from 'react';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
