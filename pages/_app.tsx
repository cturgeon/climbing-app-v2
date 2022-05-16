import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, AppShell, Header, MediaQuery, Burger, useMantineTheme, Text, Button, Group, Anchor, Navbar, SimpleGrid, Space, Grid, Aside } from '@mantine/core';
import { useState } from 'react';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Head>
        <title>Climbing App</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>   
      <AppShell
        header={<Header height={70} p="md">
        <div style={{ display: 'flex', justifyContent:'space-between' }}>
        <Grid>
          <div>
            <Button component='a' href='/'>Climb Logs</Button>
          </div>
        </Grid>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              size="sm"
              color={theme.colors.gray[6]}
              mr="xl"
            />
          </MediaQuery>
        </div>
        </Header>}
        asideOffsetBreakpoint="sm"
        fixed
        aside={
          <Aside
            p="md" 
            hiddenBreakpoint="sm" 
            hidden={!opened} 
            width={{ sm: 200, lg: 300 }}
          >
            <Aside.Section grow >
              <SimpleGrid>
                <Button component="a" href="/admin">Gym Admin Page</Button>
                <Button>View Home Gym</Button>
                <Button>View Climb Logs</Button>
                <Button>Settings</Button>
              </SimpleGrid>
            </Aside.Section>
            <Aside.Section>{<Text>Log in/out</Text>}</Aside.Section>
          </Aside>
        }
        
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: 'light',
          }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </AppShell>
    </>
  );
}