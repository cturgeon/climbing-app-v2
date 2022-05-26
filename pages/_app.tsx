import Head from "next/head";

import { SessionProvider } from "next-auth/react";

import AppShellComponent from "../components/ui/shell/app-shell";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Head>
        <title>Climb Logs</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <SessionProvider session={session}>
        <AppShellComponent>
          <Component {...pageProps} />
        </AppShellComponent>
      </SessionProvider>
    </>
  );
}
