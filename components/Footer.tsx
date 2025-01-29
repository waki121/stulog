'use client';
import { IconBrandGithub } from '@tabler/icons-react';
import { ActionIcon, Anchor, Group } from '@mantine/core';
import classes from './Footer.module.css';
import Link from 'next/link';

const links = [
  { link: 'https://forms.gle/haFSbjQ7m4A4QzAHA', label: 'ご意見箱' },
  { link: 'privacy', label: 'プライバシーポリシー' },
  { link: 'tos', label: '利用規約' },
];

export function FooterCentered() {
  const items = links.map((link) => (
    <Anchor
      component={Link}
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        Studylog
        <Group className={classes.links}>{items}</Group>
        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon
            component={Link}
            href="https://github.com/waki121/stulog"
            size="lg"
            variant="default"
            radius="xl"
          >
            <IconBrandGithub size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}
