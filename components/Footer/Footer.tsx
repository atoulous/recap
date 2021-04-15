import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaLinkedin, FaMailBulk, FaGithub } from 'react-icons/fa';

import AppStoreBadge from '@/components/AppStoreBadge';
import PlayStoreBadge from '@/components/PlayStoreBadge';
import Logo from 'utils/Logo';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
      target={'_blank'}
      rel={'noreferrer'}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/aymeric-toulouse-19a768b7'}>
                <FaLinkedin />
              </SocialButton>
              <SocialButton label={'Github'} href={'https://github.com/atoulous'}>
                <FaGithub />
              </SocialButton>
              <SocialButton label={'Mail'} href={'mailto:aymeric.toulouse@gmail.com'}>
                <FaMailBulk />
              </SocialButton>
            </Stack>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Portfolio</ListHeader>
            <Link href={'#'}>About Me</Link>
            <Link href={'#'}>Technology</Link>
            <Link href={'#'}>Career</Link>
            <Link href={'#'}>Contact Me</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Front-end</ListHeader>
            <Link href={'#'}>ReactJS</Link>
            <Link href={'#'}>NextJS</Link>
            <Link href={'#'}>GraphQL Apollo</Link>
            <Link href={'#'}>Webpack</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Back-end</ListHeader>
            <Link href={'#'}>NodeJS</Link>
            <Link href={'#'}>Express</Link>
            <Link href={'#'}>NestJS</Link>
            <Link href={'#'}>GraphQL</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>DevOps</ListHeader>
            <Link href={'#'}>Docker</Link>
            <Link href={'#'}>Unix</Link>
            <Link href={'#'}>AWS</Link>
            <Link href={'#'}>ELK</Link>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
        >
          <Text>© 2021 Aymeric Toulouse. All rights reserved</Text>
        </Container>
      </Box>
    </Box>
  );
}
