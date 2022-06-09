import { SessionProvider } from "next-auth/react";
import Head from "next/head";

import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

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
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <MantineProvider withGlobalStyles withNormalizeCSS>
        <SessionProvider session={session}>
          <NotificationsProvider>
            <AppShellComponent>
              <Component {...pageProps} />
            </AppShellComponent>
          </NotificationsProvider>
        </SessionProvider>
      </MantineProvider>
    </>
  );
}
