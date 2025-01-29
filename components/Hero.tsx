import { Button, Container, Text, Title } from '@mantine/core';
import { Dots } from './Dots';
import classes from './HeroText.module.css';
import Link from 'next/link';

export function HeroText() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          勉強を{' '}
          <Text component="span" className={classes.highlight} inherit>
            キロク
          </Text>{' '}
          してみませんか
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            Studylogは勉強時間や教科などを記録し、モチベーションを上げたり友達と競争し、楽しく勉強できるために誕生しました。
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} size="lg" component={Link} href="/signup">
            はじめてみる
          </Button>
        </div>
      </div>
    </Container>
  );
}
