import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react';
import { favouriteArticle, articles, ArticleInterface } from '../../utils/articles';

const articlesSorted = articles.sort((a, b) => a.priceNumber - b.priceNumber);

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium" color={'white'}>{props.name}</Text>
      <Text color={'white'}>—</Text>
      <Text color={'white'}>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

interface ArticleProps {
  article: ArticleInterface;
}

const Article: React.FC<ArticleProps> = ({ article }) => (
  <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
    <Box
      as={Link}
      w="100%"
      href={article.url}
      target={'_blank'}
      textDecoration="none"
      boxShadow={'md'}
      bg={'gray.600'}
      rounded={'md'}
      _hover={{ textDecoration: 'none', boxShadow: useColorModeValue('2xl', 'dark-lg') }}
    >
      <Box overflow="hidden">
        <Image
          transform="scale(1.0)"
          src={article.src}
          alt="some text"
          objectFit="cover"
          width="100%"
          transition="0.3s ease-in-out"
          _hover={{
            transform: 'scale(1.05)',
          }}
          maxHeight={'240px'}
        />
      </Box>
      <Box borderRadius="lg" overflow="hidden" m={2}>
        <BlogTags tags={article.tags} marginTop="3" />
        <Heading fontSize="xl" marginTop="2" color={'white'}>
          {article.title}
        </Heading>
        <Text as="p" fontSize="xl" color={useColorModeValue('red.700', 'red.200')}>
          {article.price}
        </Text>
        <Text as="div" fontSize="md" color={'white'} style={{
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          height: '100px',
          display: '-webkit-box',
          WebkitLineClamp: 4,
          WebkitBoxOrient: 'vertical',
        }}>
          {article.text}
        </Text>
        <BlogAuthor
          name={article.from}
          date={article.date}
        />
      </Box>
    </Box>
  </WrapItem>
)

const ArticleList = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1" id={'airbnb'}>Airbnb favori</Heading>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }} href={favouriteArticle.url} target={'_blank'}>
              <Image
                borderRadius="lg"
                src={favouriteArticle.src}
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <BlogTags tags={favouriteArticle.tags} />
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }} href={favouriteArticle.url} target={'_blank'}>
              {favouriteArticle.title}
              <Text
                as="p"
                marginTop="2"
                color={useColorModeValue('red.700', 'red.200')}
                fontSize="xl">
                {favouriteArticle.price}
              </Text>
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            {favouriteArticle.text}
          </Text>
          <BlogAuthor name={favouriteArticle.from} date={favouriteArticle.date} />
        </Box>
      </Box>
      <Heading as="h2" marginTop="5">
        Les autres airbnb
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        {
          articlesSorted.map(article => (
            <Article key={article.id} article={article} />
          ))
        }
      </Wrap>
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">Vote, votons, votez. Jules César.</Heading>
        <Text as="p" fontSize="lg">
        </Text>
      </VStack>
    </Container>
  );
};

export default ArticleList;
