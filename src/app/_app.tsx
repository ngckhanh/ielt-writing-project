import type { ReactElement, ReactNode } from "react";
import type { AppProps as NextAppProps } from "next/app";
import type { NextPage } from "next";
import "@/styles/globals.css"; // Your global styles

// Extend the NextPage type to include `getLayout`
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// Extend the AppProps type to include `getLayout`
type AppPropsWithLayout = NextAppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the custom `getLayout` if it exists, otherwise render the page as-is
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
