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
      <Container as={Stack} maxW={'6xl'} py={5}>
        <SimpleGrid >
          <Stack spacing={6} flexDirection={'row'} justifyContent={'space-around'}>
            <Box width={20} height={20}>
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
          <Text>© 2021 made with love</Text>
        </Container>
      </Box>
    </Box>
  );
}
