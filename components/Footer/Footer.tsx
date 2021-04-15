import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaLinkedin, FaMailBulk, FaGithub } from 'react-icons/fa';

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
        <SimpleGrid columns={{ base: 2, sm: 2, md: 5 }} spacing={8}>
          <Stack spacing={6}>
            <Box width={20} height={20} margin={'auto'}>
              <img src={'/atlogo.png'} style={{ borderRadius: '50%'}}/>
            </Box>
            <Stack direction={'row'} spacing={6} justifyContent={'center'} >
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
            <p>About Me</p>
            <p>Technology</p>
            <p>Career</p>
            <p>Contact Me</p>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Front-end</ListHeader>
            <p>ReactJS</p>
            <p>NextJS</p>
            <p>GraphQL Apollo</p>
            <p>Webpack</p>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Back-end</ListHeader>
            <p>NodeJS</p>
            <p>Express</p>
            <p>NestJS</p>
            <p>GraphQL</p>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>DevOps</ListHeader>
            <p>Docker</p>
            <p>AWS</p>
            <p>ELK</p>
            <p>SQL/noSQL</p>
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
