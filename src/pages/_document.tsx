import Document, { Head, Html, Main, NextScript } from 'next/document';

interface CustomDocumentInterface {
  url: string;
  title: string;
  description: string;
}

class CustomDocument extends Document implements CustomDocumentInterface {
  url = 'https://nama-tamago.github.io/p1ass-lt';

  title = '';

  description = '';

  render() {
    return (
      <Html lang="ja">
        <Head lang="ja-JP">
          <meta name="charset" content="UTF-8" />
          <meta name="description" content={this.description} />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          {/* prevent browser to highlight numbers like phone numbers */}
          <meta name="format-detection" content="telephone=no" />

          {/* ogp settings */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={this.url} />
          <meta property="og:title" content={this.title} />
          <meta property="og:site_name" content={this.title} />
          <meta property="og:description" content={this.description} />
          <meta property="og:image" content={`${this.url}/images/ogp.png`} />

          <meta name="twitter:title" content={this.title} />
          <meta name="twitter:description" content={this.description} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={`${this.url}/images/ogp.png`} />

          {/* PWA settings  */}
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#" />
          <link rel="apple-touch-icon" sizes="72x72" href="/images/icons/icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="96x96" href="/images/icons/icon-96x96.png" />
          <link rel="apple-touch-icon" sizes="128x128" href="/images/icons/icon-128x128.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/images/icons/icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/images/icons/icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="192x192" href="/images/icons/icon-192x192.png" />
          <link rel="apple-touch-icon" sizes="384x384" href="/images/icons/icon-384x384.png" />
          <link rel="apple-touch-icon" sizes="512x512" href="/images/icons/icon-512x512.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
