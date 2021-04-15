import { ReactNode } from 'react';
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';

export default function StatsGridWithImage() {
  return (
    <Box bg={'gray.800'} position={'relative'}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        // backgroundImage="url('/templates/stats-grid-with-image.png')"
        backgroundSize={'cover'}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={'absolute'}
        width={'50%'}
        insetY={0}
        right={0}
      >
        <Flex
          bgGradient={'linear(to-r, gray.800 10%, transparent)'}
          w={'full'}
          h={'full'}
        />
      </Flex>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            color={'gray.400'}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 10, xl: 20 }}
          >
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'gray.500'}
              >
                Technology
              </Text>
              <Heading
                color={'white'}
                mb={5}
                fontSize={{ base: '3xl', md: '5xl' }}
              >
                JavaScript for futur
              </Heading>
              <Text fontSize={'xl'} color={'gray.400'}>
                JavaScript is everywhere these days.<br/>
                I use it on front-end with <StatsText>ReactJS</StatsText> and back-end with <StatsText>NodeJS</StatsText>,
                on mobile with <StatsText>React Native</StatsText> and even on desktop with <StatsText>Electron</StatsText>.<br/>
                And theses are only my favorites, there are plenty of other JavaScript frameworks.
                This has led it to become nowadays one of the most wanted job skills.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={'heading'}
                    fontSize={'3xl'}
                    color={'white'}
                    mb={3}
                  >
                    {stat.title}
                  </Text>
                  <Text fontSize={'xl'} color={'gray.400'}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={'span'} fontWeight={700} color={'white'}>
    {children}
  </Text>
);

const stats = [
  {
    title: 'The #1',
    content: (
      <>
        The most popular technology according to StackOverflow’s 2020 Developer survey.
      </>
    ),
  },
  {
    title: 'A big community',
    content: (
      <>
        There are probably more JavaScript frameworks out there than actually developers using them.
      </>
    ),
  },
  {
    title: 'A way of evolving',
    content: (
      <>
        Leaving frameworks and libraries aside, the language itself is constantly evolving.
      </>
    ),
  },
  {
    title: 'An alive ecosystem',
    content: (
      <>
        There are literally millions of modules shared in NPM, every day.
      </>
    ),
  },
];
