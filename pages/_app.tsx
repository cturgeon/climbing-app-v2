import { useState } from "react";
import { AppProps } from "next/app";
import Head from "next/head";

import { SessionProvider } from "next-auth/react";

import {
  MantineProvider,
  AppShell,
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  Text,
  Button,
  SimpleGrid,
  Grid,
  Aside,
} from "@mantine/core";

import LoginButton from "../components/auth/login-btn";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

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
        <AppShell
          header={
            <Header height={70} p="md">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Grid>
                  <div>
                    <Text
                      component="a"
                      href="/"
                      align="center"
                      variant="gradient"
                      gradient={{
                        from: "rgba(60, 7, 250, 1)",
                        to: "rgba(53, 219, 69, 1)",
                        deg: 20,
                      }}
                      size="xl"
                      weight={800}
                      style={{ fontFamily: "Greycliff CF, sans-serif" }}
                      p={30}
                    >
                      Climb Logs
                    </Text>
                  </div>
                </Grid>
                <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                  <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    size="sm"
                    color={theme.colors.gray[6]}
                    mr="xl"
                  />
                </MediaQuery>
              </div>
            </Header>
          }
          asideOffsetBreakpoint="sm"
          fixed
          aside={
            <Aside
              p="md"
              hiddenBreakpoint="sm"
              hidden={!opened}
              width={{ sm: 200, lg: 300 }}
            >
              <Aside.Section grow>
                <SimpleGrid>
                  <Button component="a" href="/admin">
                    Gym Admin Page
                  </Button>
                  <Button component="a" href="/user/home">
                    View Home Gym
                  </Button>
                  <Button component="a" href="/user/logs">
                    View Climb Logs
                  </Button>
                  <Button component="a" href="/user/settings">
                    Settings
                  </Button>
                </SimpleGrid>
              </Aside.Section>
              <Aside.Section>{<LoginButton />}</Aside.Section>
            </Aside>
          }
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              /** Put your mantine theme override here */
              colorScheme: "light",
            }}
          >
            <Component {...pageProps} />
          </MantineProvider>
        </AppShell>
      </SessionProvider>
    </>
  );
}
