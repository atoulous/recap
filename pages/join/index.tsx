import { NextSeo } from 'next-seo';
import { Fade } from '@chakra-ui/react';

import Layout from 'components/Layout';
import JoinOurTeam from 'components/JoinOurTeam';

const BlogPage = () => {
  return (
    <Layout>
      <NextSeo
        title="Join | Tree"
        description="A short description goes here."
      />
      <Fade in>
        <JoinOurTeam />
      </Fade>
    </Layout>
  );
};

export default BlogPage;