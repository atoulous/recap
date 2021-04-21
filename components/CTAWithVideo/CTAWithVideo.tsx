import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconProps,
  useColorModeValue,
  Link,
  Tabs, TabList, TabPanels, Tab, TabPanel
} from '@chakra-ui/react';
import { FaQuestion } from 'react-icons/fa';
import React from "react";

import { sondages } from '../../utils/sondages';

const SondageRecap = ({ sondage }) => (
  <Stack
    align={'center'}
    spacing={{ base: 8, md: 10 }}
    py={{ base: 5, md: 10 }}
    direction={{ base: 'column', md: 'row' }}
  >
    <Stack flex={1} spacing={{ base: 5, md: 10 }}>

      <Text
        fontSize={'xl'}
      >
        {sondage.text}
      </Text>
      <Stack
        spacing={{ base: 4, sm: 6 }}
        direction={{ base: 'column', sm: 'row' }}
      >
        <Button
          rounded={'full'}
          size={'lg'}
          fontWeight={'normal'}
          px={6}
          colorScheme={'red'}
          bg={'red.400'}
          _hover={{ bg: 'red.500' }}
          leftIcon={sondage.buttonText ? '' : <FaQuestion />}
        >
          <Link
            isExternal
            target={'_blank'}
            href={sondage.url}
            textDecoration="none" _hover={{ textDecoration: 'none' }}
          >
            {sondage.buttonText || 'Sondage'}
          </Link>
        </Button>
      </Stack>
    </Stack>
    <Flex
      flex={1}
      justify={'center'}
      align={'center'}
      position={'relative'}
      w={'full'}
      height={'500px'}
    >
      <Blob
        w={'180%'}
        h={'180%'}
        position={'absolute'}
        top={'-20%'}
        left={0}
        zIndex={-1}
        color={useColorModeValue('red.50', 'red.400')}
      />
      {
        sondage?.src &&
        <Link
        isExternal
        target={'_blank'}
        href={sondage.url}
        textDecoration="none" _hover={{ textDecoration: 'none' }}
        position={'relative'}
        rounded={'2xl'}
        boxShadow={'2xl'}
        width={'full'}
        overflow={'hidden'}
      >
        <Image
          alt={'Sondage Image'}
          align={'center'}
          w={'100%'}
          h={'100%'}
          src={sondage.src}
          />
      </Link>
      }
    </Flex>
  </Stack>
)

export default function CTAWithVideo() {
  return (
    <Container maxW={'7xl'}>
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
      >
        <Text
          as={'span'}
          position={'relative'}
          _after={{
            content: "''",
            width: 'full',
            height: '30%',
            position: 'absolute',
            bottom: 1,
            left: 0,
            bg: 'red.400',
            zIndex: -1,
          }}
        >
          Recap Vacances
        </Text>
        <br />
        <Text as={'span'} color={'red.400'}>
          Vilnavey Summer 2021
        </Text>
      </Heading>
      <Heading
        mt={10}
        mb={5}
      >
        <Text as={'p'}>
          Sondages:
        </Text>
      </Heading>

      <Tabs>
        <TabList>
          {
            sondages.map(sondage =>
              <Tab key={sondage.id}>{sondage.title}</Tab>
            )
          }
        </TabList>
        <TabPanels>
          {
            sondages.map(sondage =>
              <TabPanel key={sondage.id}>
                <SondageRecap sondage={sondage} />
              </TabPanel>
            )
          }
        </TabPanels>
      </Tabs>
    </Container>
  );
}

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
