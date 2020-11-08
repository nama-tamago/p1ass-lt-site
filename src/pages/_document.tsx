import Document, { Head, Html, Main, NextScript } from 'next/document';

interface CustomDocumentInterface {
  url: string;
  title: string;
  description: string;
}

class CustomDocument extends Document implements CustomDocumentInterface {
  url = 'https://nama-tamago.github.io/p1ass-lt-site';

  title = 'p1ass LT';

  description = 'p1assくんの誕生日を祝うLT会の特設サイトです 🎉';

  render() {
    return (
      <Html lang="ja">
        <Head lang="ja-JP">
          <meta name="charset" content="UTF-8" />
          <meta name="description" content={this.description} />
          <link rel="shortcut icon" href="/p1ass-lt-site/favicon.ico" type="image/x-icon" />
          {/* prevent browser to highlight numbers like phone numbers */}
          <meta name="format-detection" content="telephone=no" />

          {/* ogp settings */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={this.url} />
          <meta property="og:title" content={this.title} />
          <meta property="og:site_name" content={this.title} />
          <meta property="og:description" content={this.description} />
          <meta property="og:image" content={`${this.url}/ogp.png`} />

          <meta name="twitter:title" content={this.title} />
          <meta name="twitter:description" content={this.description} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={`${this.url}/ogp.png`} />

          {/* PWA setting  */}
          <link rel="manifest" href="/p1ass-lt-site/manifest.json" />
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
