import "./globals.css";
import type { AppProps } from "next/app";
import { Theme, injectGlobalStyles, ToastsProvider } from "@artsy/palette";

const { GlobalStyles } = injectGlobalStyles(`
  /* overrides and additions */
`);

export default function ExampleApp({
  Component,
  pageProps,
}: AppProps): JSX.Element {
  return (
    <Theme>
      <GlobalStyles />
      <Component {...pageProps} />
    </Theme>
  );
}
