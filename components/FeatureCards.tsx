'use client';
import {
  IconChartBar,
  IconMailbox,
  IconUser,
} from '@tabler/icons-react';
import {
  Badge,
  Button,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import classes from './FeaturesCards.module.css';
import Link from 'next/link';

const mockdata = [
  {
    title: 'グラフで確認できる',
    description: '一日・一週間の勉強時間がグラフで確認できる機能を搭載予定です',
    icon: IconChartBar,
  },
  {
    title: '登録が簡単',
    description:
      'Googleアカウントを用いてアカウント登録をする仕組みになっているため、安全で面倒なメールアドレスの入力の必要がありません！',
    icon: IconUser,
  },
  {
    title: '意見を伝えれる',
    description:
      '現在このアプリは公開ベータで、意見や新機能などを募集しております！',
    icon: IconMailbox,
  },
];

export function FeaturesCards() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon size={50} stroke={2} color={theme.colors.blue[6]} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
        <br />
        {feature.title === '意見を伝えれる' ? (
          <Button
            component={Link}
            variant="light"
            href={'https://forms.gle/haFSbjQ7m4A4QzAHA'}
          >ご意見はこちらから</Button>
        ) : (
          <></>
        )}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg">
          公開ベータ版
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Studylogの特徴とは？
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Studylogは中学一年生によって開発されています。
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
