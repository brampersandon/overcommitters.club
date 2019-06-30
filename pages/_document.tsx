// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const title = "Overcommitters Club - reclaim some time";
    const description = `Overcommitters Club is a monthly "event" for folks like us, who sign up for too many things, and need to reclaim that time every once in awhile. We like to think we're the only recurring event that's happy when you're a no-show.`;

    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <title>{title}</title>
          <meta name="title" content={title} />
          <meta name="description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://overcommitters.club/" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://overcommitters.club/" />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
          <meta property="twitter:image" content="" />
        </Head>
        <body className="bg-indigo-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
