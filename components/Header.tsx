'use client';
import {
  Box,
  Burger,
  Button,
  Divider,
  Drawer,
  Group,
  ScrollArea,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <h2>Studylog</h2>
          <Group h="100%" gap={0} visibleFrom="sm">
            {/**
            <a href="#" className={classes.link}>
              Home
            </a>
            <a href="#" className={classes.link}>
              Learn
            </a>
            <a href="#" className={classes.link}>
              Academy
            </a>
            */}
          </Group>
          <Group visibleFrom="sm">
            <Button variant="default">ログイン</Button>
            <Button>登録</Button>
          </Group>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Studylog"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          {/**
         <a href="#" className={classes.link}>
            Home
          </a>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>
                    <Divider my="sm" />
           */}

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">ログイン</Button>
            <Button>登録</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
