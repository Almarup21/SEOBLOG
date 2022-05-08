import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CostumDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/css/bootstrap.min.css"
            integrity="sha512-T584yQ/tdRR5QwOpfvDfVQUidzfgc2339Lc8uBDtcp/wYu80d7jwBgAxbyMh0a9YM9F8N3tdErpFI8iaGx6x5g=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          />
          {/* <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
            integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          /> */}
          <link rel="stylesheet" href="/static/css/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
