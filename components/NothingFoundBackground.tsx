import { Button, Container, Group, Text, Title } from '@mantine/core';
import classes from './NothingFoundBackground.module.css';
import { IconHome } from '@tabler/icons-react';
import Link from 'next/link';

export function NothingFoundBackground() {
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>404</div>
        <Title className={classes.title}>ページが見つかりません</Title>
        <Text size="lg" ta="center" className={classes.description}>
          このページは存在しません。
          <br />
          移動されたか、間違ったアドレスを入力した可能性があります。
          これが不具合と思われるならば、意見箱までご連絡ください。
        </Text>
        <Group justify="center">
          <Button variant="filled" component={Link} href="/" size="md">
            <IconHome />
            ホームに戻る
          </Button>
          <Button
            component={Link}
            size="md"
            variant="outline"
            href={'https://forms.gle/haFSbjQ7m4A4QzAHA'}
          >
            ご意見箱
          </Button>
        </Group>
      </Container>
    </div>
  );
}
