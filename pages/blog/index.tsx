import { NextSeo } from 'next-seo';
import { Fade } from '@chakra-ui/react';

import Layout from 'components/Layout';
import Blog from 'components/Blog';

const BlogPage = () => {
  return (
    <Layout>
      <NextSeo
        title="Blog | Tree"
        description="A short description goes here."
      />
      <Fade in>
        <Blog />
      </Fade>
    </Layout>
  );
};

export default BlogPage;