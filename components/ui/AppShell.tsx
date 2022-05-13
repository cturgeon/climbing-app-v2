import { AppShell, Header, MediaQuery, Burger, useMantineTheme, Text, Button, Group, Anchor, Navbar, SimpleGrid, Space, Grid, Aside } from '@mantine/core';
import { useState } from 'react';

export default function AppShellComponent() {    
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
        padding="md"
        navbarOffsetBreakpoint="sm"
        fixed
        navbar={
        <Navbar position={{right: 0}} p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
            <Navbar.Section grow >
            <Text>View Home Gym</Text>
            <Text>View Logs</Text>
            <Text>Settings</Text>
            </Navbar.Section>
            <Navbar.Section>{<Text>Log in/out</Text>}</Navbar.Section>
        </Navbar>
        }
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
        styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
    >
    </AppShell>
  )
    
}