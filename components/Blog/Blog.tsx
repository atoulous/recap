import {
  Stack,
  Container,
  SimpleGrid,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from '@chakra-ui/react';

import BlogPostWithImage from 'components/BlogPostWithImage';

const Blog = () => (
  <Container as={Stack} maxW={'6xl'} py={10}>
    <Tabs>
      <TabList>
        <Tab>Actu</Tab>
        <Tab>DIY</Tab>
        <Tab>Application</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }} spacing={8}>
            <BlogPostWithImage />
            <BlogPostWithImage />
            <BlogPostWithImage />
            <BlogPostWithImage />
            <BlogPostWithImage />
            <BlogPostWithImage />
            <BlogPostWithImage />
          </SimpleGrid>
        </TabPanel>
        <TabPanel>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }} spacing={8}>
            <BlogPostWithImage />
            <BlogPostWithImage />
          </SimpleGrid>
        </TabPanel>
        <TabPanel>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }} spacing={8}>
            <BlogPostWithImage />
            <BlogPostWithImage />
            <BlogPostWithImage />
            <BlogPostWithImage />
          </SimpleGrid>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Container>
);

export default Blog;
