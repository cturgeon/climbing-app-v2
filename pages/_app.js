import { SessionProvider } from "next-auth/react";
import Head from "next/head";

import {
  MantineProvider,
  ColorScheme,
  ColorSchemeProvider,
} from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

import AppShellComponent from "../components/ui/shell/app-shell";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  // const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  // const toggleColorScheme = (value?: ColorScheme) => {
  //   const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'light');
  //   setColorScheme(nextColorScheme);
  //   setCookies('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  // };

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

      {/* <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}> */}
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <SessionProvider session={session}>
          <NotificationsProvider>
            <AppShellComponent>
              <Component {...pageProps} />
            </AppShellComponent>
          </NotificationsProvider>
        </SessionProvider>
      </MantineProvider>
      {/* </ColorSchemeProvider> */}
    </>
  );
}

// App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
//   colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
// });
